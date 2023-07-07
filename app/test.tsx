import React, { useState, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { AnsweringTheQuestions } from '../components/organisms/AnsweringTheQuestions';
import { GlobalContext } from "../components/contexts/GlobalContext";
import { BlackLink } from "../components/atoms/BlackLink";
import { ProgressBarFeatured } from "../components/molecules/ProgessBarFeatured";
import { UnitQuestion } from "../types/QuestionTypes";
import { saveSegments } from "../components/utils/LocalWherhouse";
import { questionImages } from "../components/utils/ImageUtility";
import { ContainerTemplate } from "../components/molecules/ContainerTemplate";
import { i18nQuestions } from "../components/molecules/i18n";


export default function ModalScreen() {
  const { answers, setSegments } = useContext(GlobalContext);
  const questions = i18nQuestions.t("questions") as UnitQuestion[];
  const [page, setPage] = useState(answers && questions.length > answers.length ? answers.length : 0);

  const leadingPage = page + 1;
  const getCurrentPage = () => Math.round(leadingPage / questions.length * 100);
  const getPageCounter = () => leadingPage + "/" + questions.length;
  const previousPage = () => setPage(Math.max(page - 1, 0));

  const computeResults = () => {
    // const newSegments = Array(segments.length).fill(0);
    const newSegments = Array(questions.reduce((c, v) => v.category + 1 > c ? v.category + 1 : c, 0)).fill(0);
    // console.log("computeResults ", segments.length, newSegments);
    answers.forEach((v, k) => {
      if (questions[k] && questions[k].category !== undefined) {
        const answerKeys = answers[k].answerKeys;
        const category = questions[k].category;
        newSegments[category] += ((questions[k].answers.length - 1) - answerKeys[0]);
      }
    });
    // console.log("computeResults " + answers.length + " " + newSegments);
    setSegments(newSegments);

    return newSegments;
  };
  const saveComputedSegments = (computeResults: Function) => () => saveSegments(computeResults());

  return (
      <ContainerTemplate>
        <View style={styles.thirdContainer}>
          <View style={styles.blackLinkContainer}>
            <BlackLink style={{ opacity: page ? 1 : 0 }} onPress={previousPage} chevron>{" "}</BlackLink>
            {/*<BlackLink style={{ opacity: goBackOrNot ? 1 : 0 }} onPress={previousPage} chevron>{goBackOrNot}</BlackLink>*/}
            <ProgressBarFeatured
                textStyle={styles.progressBarText}
                textBottomLeft={getPageCounter()}
                textBottomRight={getCurrentPage() + "%"}
                progress={getCurrentPage()}
                progressColor={"#29B4FF"} />
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={questionImages[page]} resizeMode="contain"/>
          </View>
          <View flex-6 style={styles.questionsContainer}>
            <AnsweringTheQuestions onFinish={saveComputedSegments(computeResults)} page={page} items={questions} setPage={setPage}/>
          </View>
        </View>
      </ContainerTemplate>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  blackLinkContainer: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%"
  },
  progressBarText: {
    fontWeight: "bold"
  },
  thirdContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around"
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
  },
  questionsContainer: {
    width: "100%",
  },
});
