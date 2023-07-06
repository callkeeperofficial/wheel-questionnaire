import React, { useState, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { AnsweringTheQuestions } from '../components/organisms/AnsweringTheQuestions';
import wheelQuestions from "../assets/data/wheel-questions.json";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { GlobalContext } from "../components/contexts/GlobalContext";
import { BlackLink } from "../components/atoms/BlackLink";
import { ProgressBarFeatured } from "../components/molecules/ProgessBarFeatured";
import { UnitQuestion } from "../types/QuestionTypes";
import { saveSegments } from "../components/utils/LocalWherhouse";
import { questionImages } from "../components/utils/ImageUtility";
import {ContainerTemplate} from "../components/molecules/ContainerTemplate";


export default function ModalScreen() {
  const { answers, setSegments } = useContext(GlobalContext);
  const i18n = new I18n({...wheelQuestions});
  i18n.locale = getLocales()[0].languageCode;
  const questions = i18n.t("questions") as UnitQuestion[];
  const [page, setPage] = useState(answers && questions.length > answers.length ? answers.length : 0);

  const leadingPage = page + 1;
  const getCurrentPage = () => Math.round(leadingPage / questions.length * 100);
  const getPageCounter = () => leadingPage + "/" + questions.length;
  const goBackOrNot =  page ? " "  : " ";
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
        <View style={{ width: "100%", flex: 1, justifyContent: "flex-start" }}>
        <View style={styles.blackLinkContainer}>
          <BlackLink style={{ opacity: goBackOrNot ? 1 : 0 }} onPress={previousPage} chevron>{goBackOrNot}</BlackLink>
          {/*<BlackLink style={{ opacity: goBackOrNot ? 1 : 0 }} onPress={previousPage} chevron>{goBackOrNot}</BlackLink>*/}
        </View>
        <ProgressBarFeatured
            textStyle={styles.progressBarText}
            textBottomLeft={getPageCounter()}
            textBottomRight={getCurrentPage() + "%"}
            progress={getCurrentPage()}
            progressColor={"#29B4FF"} />
        <Image style={styles.image} source={questionImages[page]} resizeMode="contain"/>
        <View flex style={{ width: "100%" }}>
          <AnsweringTheQuestions onFinish={saveComputedSegments(computeResults)} page={page} items={questions} setPage={setPage}/>
        </View>
        </View>
      </ContainerTemplate>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
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
    alignItems: "flex-start",
    width: "100%"
  },
  progressBarText: {
    fontWeight: "bold"
  }
});
