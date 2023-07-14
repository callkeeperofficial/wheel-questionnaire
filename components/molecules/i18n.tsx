import {I18n} from "i18n-js";
import translation from "../../assets/data/i18n.json";
import {getLocales} from "expo-localization";
import wheelQuestions from "../../assets/data/wheel-questions.json";
//
// console.log("i18n.js", getLocales()[0].languageCode);

const knownLocale = Object.keys(translation).find(t => {
    // console.log("i18n.js", t, getLocales()[0].languageCode);
    return t === getLocales()[0].languageCode;
});
const locale = knownLocale || "en";

export const i18n = new I18n({...translation});
i18n.locale = locale;
// i18n.locale = "ru";

export const i18nQuestions = new I18n({...wheelQuestions});
i18nQuestions.locale = locale;
// i18nQuestions.locale = "ru";

export const changeLanguage = (locale: string | undefined) => {
    if (locale) {
        i18n.locale = locale;
        i18nQuestions.locale = locale;
    }
};