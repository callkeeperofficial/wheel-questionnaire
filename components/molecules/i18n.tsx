import {I18n} from "i18n-js";
import translation from "../../assets/data/i18n.json";
import {getLocales} from "expo-localization";
import wheelQuestions from "../../assets/data/wheel-questions.json";

export const i18n = new I18n({...translation});
i18n.locale = getLocales()[0].languageCode;
// i18n.locale = "ru";

export const i18nQuestions = new I18n({...wheelQuestions});
i18nQuestions.locale = getLocales()[0].languageCode;
// i18nQuestions.locale = "ru";

export const changeLanguage = (locale: string | undefined) => {
    if (locale) {
        i18n.locale = locale;
        i18nQuestions.locale = locale;
    }
};