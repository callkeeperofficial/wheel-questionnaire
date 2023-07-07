import React, { useContext, useState } from 'react';
import { View } from "react-native-ui-lib";
import { QuestionnaireButton } from "../atoms/QuestionnaireButton";
import { FlatList, StyleSheet, Text } from "react-native";
import { Gap } from "../atoms/Gap";
import { Pick } from "../utils/Multipick";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalContext } from "../contexts/GlobalContext";
import { useRouter } from "expo-router";
import { goToFinish } from '../utils/StaticFunctions';


type AnsweringTheQuestionsProps = { onFinish: Function, page: number, setPage: Function, items: [] };

export const AnsweringTheQuestions = (props: AnsweringTheQuestionsProps) => {
    const { onFinish, page, items, setPage } = props;
    const router = useRouter();
    const { answers, setAnswers } = useContext(GlobalContext);

    const currentQuestion = items[page];
    const selectedIds = answers && answers[page] ? answers[page].answerKeys : [] ;
    const setSelectedIds = (selectedIdsNew: number[]) => {
        if (selectedIdsNew.length > 0) {
            const existed = answers ? answers
                .findIndex((e: { questionKey: number; }) => e.questionKey === currentQuestion.key) : -1;

            if (existed > -1) {
                answers[existed] = { questionKey: currentQuestion.key, answerKeys: selectedIdsNew };
                // console.log(item.key, answers);
            } else {
                answers.push({ questionKey: currentQuestion.key, answerKeys: selectedIdsNew });
                // console.log(item.key, answers);
            }

            setAnswers([...answers]);

            if (currentQuestion.answers[0].single) {
                const newPage = Math.min(page + 1, items.length - 1);
                setPage(newPage);

                if (newPage === page) {
                    goToFinish.bind(null, router)();
                    onFinish();
                }
            }
        }
    };
    const pick = Pick(selectedIds, setSelectedIds);
    const iconComponentOnDemand = (key: number, single: boolean) => pick.isSelected(key) && !single
        ? <MaterialCommunityIcons name="checkbox-marked" size={20} color={ "#8B80E5" } />
        :  null;

    const renderQuestion = (q: { item: { key: any; single: any; answer: any; }; }) => (
        <QuestionnaireButton
            iconComponent={iconComponentOnDemand(q.item.key, q.item.single)}
            // icon={pick.isSelected(q.item.key) ? i.icons.cb : q.item.single ? "" : i.icons.ec}
            // label={(pick.isSelected(q.item.key) ? "☑ " : q.item.single ? "" : "☐ ") +  q.item.answer}
            label={q.item.answer}
            // onPress={ q.item.single ? setSingle(q.item) : setMultiple(q.item) }
            onPress={pick.set(q.item.key, q.item.single)} icon={undefined}
            borderWidth={pick.isSelected(q.item.key)}
            style={undefined}
            children={undefined}        />
    );

    return (
        <View flex key={currentQuestion.key} style={styles.container}>
            <View flex-2 center>
                <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>
            <View flex-8>
                <FlatList
                    style={styles.flatList}
                    data={currentQuestion.answers}
                    renderItem={renderQuestion}
                    extraData={answers}
                    ItemSeparatorComponent={ () => <View marginT-10 /> }
                    // ListHeaderComponent={ <Gap /> }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around"
    },
    flatList: {
        flex: 1
    },
    questionText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    }
});