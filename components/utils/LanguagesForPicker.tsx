import { ILanguagePicker } from "react-native-language-select";

export const languagesForPicker: ILanguagePicker[] = [
    {
        title: "Deutsch",
        imageSource: require("../../assets/images/flags/germany.png"),
        language: "de",
    },
    {
        title: "English",
        imageSource: require("../../assets/images/flags/america.png"),
        language: "en",
    },
    {
        title: "French",
        imageSource: require("../../assets/images/flags/france.png"),
        language: "fr",
    },
    {
        title: "Japanese",
        imageSource: require("../../assets/images/flags/japan.png"),
        language: "jp",
    },
    {
        title: "Portuguese",
        imageSource: require("../../assets/images/flags/portugal.png"),
        language: "pt",
    },
    {
        title: "Russian",
        imageSource: require("../../assets/images/flags/russia.png"),
        language: "ru",
    },
    {
        title: "Spanish",
        imageSource: require("../../assets/images/flags/spain.png"),
        language: "es",
    },
];