import {StyleSheet, TouchableOpacity, Image, Platform, Dimensions, FlatList} from 'react-native';
import { Text, View } from '../components/Themed';
import { useRouter } from "expo-router";
import { megaCreator } from "../components/utils/ImageUtility";
import { goToTest, openPrivacy } from "../components/utils/StaticFunctions";
import {ContainerTemplate} from "../components/molecules/ContainerTemplate";
import {i18n} from "../components/molecules/i18n";
import wheelQuestions from "../assets/data/wheel-questions.json"
import LanguagePicker, { ILanguagePicker } from "react-native-language-select";
import {useState} from "react";


const data: ILanguagePicker[] = [
  {
    title: "Deutsch",
    imageSource: require("../assets/images/flags/germany.png"),
    language: "de",
  },
  {
    title: "English",
    imageSource: require("../assets/images/flags/america.png"),
    language: "en",
  },
  {
    title: "French",
    imageSource: require("../assets/images/flags/france.png"),
    language: "fr",
  },
  {
    title: "Japanese",
    imageSource: require("../assets/images/flags/japan.png"),
    language: "jp",
  },
  {
    title: "Portuguese",
    imageSource: require("../assets/images/flags/portugal.png"),
    language: "pt",
  },
  {
    title: "Russian",
    imageSource: require("../assets/images/flags/russia.png"),
    language: "ru",
  },
  {
    title: "Spanish",
    imageSource: require("../assets/images/flags/spain.png"),
    language: "es",
  },
];

export default function WelcomeScreen() {
  const [langPick, setLangPick] = useState(false);
  const findLocaleIndex = (isoCode: string) => data.findIndex(l => l.language === isoCode);
  const [localeIndex, setLocaleIndex] = useState(findLocaleIndex(i18n.locale));
  const router = useRouter();
  const imageHeight = Dimensions.get('window').width * .8 - 100;

  return (
      <ContainerTemplate>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image style={[styles.image, { height: imageHeight }]} source={megaCreator} resizeMode={"contain"}/>
          </View>
          <Text style={styles.title}>{i18n.t("welcome")}</Text>
          <Text style={styles.description}>{i18n.t("welcomeDescription")}</Text>
          <View style={styles.takeTestButton}>
            <TouchableOpacity onPress={goToTest.bind(null, router)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{i18n.t("takeTest")}</Text>
              </View>
            </TouchableOpacity>
          </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => setLangPick(!langPick)}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={{width: 24, height: 24}} source={data[localeIndex].imageSource}/>
              <Text style={{ paddingLeft: 10}}>{data[localeIndex].language.toLocaleUpperCase()}</Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={openPrivacy}>
              <Text>{i18n.t("privacyPolicy")}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.languagePicker, { display: langPick ? "flex" : "none" }]}>
          <View style={styles.languageContainer}>
            <LanguagePicker
                // containerWidth={300}
                flatListStyle={{width: 300}}
                languageItemProps={{width: 300}}

                initialIndex={localeIndex}
                data={data}
                onSelect={(selectedItem: ILanguagePicker) => {
                  setLangPick(false);
                  console.log(selectedItem);
                  setLocaleIndex(findLocaleIndex(selectedItem.language as string))
                }}
            />
          </View>
        </View>
      </ContainerTemplate>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  description: {
    fontSize: 16,
    textAlign: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: "80%",
    maxHeight: 400
  },
  button: {
    backgroundColor: "#206CEB",
    alignItems: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  takeTestButton: {
    width: "100%",
    marginVertical: 30,
  },
  languagePicker: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    height: "100%",
    width: "100%"
  },
  languageContainer: {

  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
});
