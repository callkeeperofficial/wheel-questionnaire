import React, {createContext, useState} from "react";
import { AnswerObject, ContextThing } from "../../types/ContextTypes";


export const GlobalContext = createContext<ContextThing>({
    answers: [],
    setAnswers: () => {},
    segments: [],
    setSegments: () => {}
});

export const GlobalContextWrapper = (props: { children: any }) => {
    const { children } = props;
    const [answers, setAnswers] = useState<AnswerObject[]>([]);
    const [segments, setSegments] = useState<number[]>([]);

    return (
        <GlobalContext.Provider value={{
            answers,
            setAnswers,
            segments,
            setSegments
        }}>
            {children}
        </GlobalContext.Provider>
    );
};