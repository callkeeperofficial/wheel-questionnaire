import {Dispatch, SetStateAction} from "react";

export type AnswerObject = {
    questionKey: number,
    answerKeys: number[]
};

export type ContextThing = {
    answers: AnswerObject[],
    setAnswers: Dispatch<SetStateAction<AnswerObject[]>> | Function
    segments: number[],
    setSegments: Dispatch<SetStateAction<number[]>> | Function
}