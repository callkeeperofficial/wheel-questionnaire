import {I18n} from "i18n-js";
import translation from "../../assets/data/i18n.json";
import {getLocales} from "expo-localization";

export const i18n = new I18n({...translation});
i18n.locale = getLocales()[0].languageCode;