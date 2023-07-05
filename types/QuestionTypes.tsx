export type UnitAnswer = {
    "key": number
    "answer": string
    "single": boolean
}

export type UnitQuestion = {
    "key": number,
    "question": string,
    "category": number,
    "answers": UnitAnswer[]
}

export type OneLanguageQuestions = {
    questions: UnitQuestion[]
}

export type LocalizedQuestions = {
    ru: OneLanguageQuestions,
    de: OneLanguageQuestions,
}