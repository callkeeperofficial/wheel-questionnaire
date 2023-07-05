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
    title: "English",
    imageSource: require("react-native-language-select/lib/local-assets/america.png"),
    language: "en",
  },
  {
    title: "Italian",
    imageSource: require("react-native-language-select/lib/local-assets/italy.png"),
  },
  {
    title: "German",
    imageSource: require("react-native-language-select/lib/local-assets/germany.png"),
  },
  {
    title: "Turkish",
    imageSource: require("react-native-language-select/lib/local-assets/turkey.png"),
    language: "tr-TR",
  },
  {
    title: "Swedish",
    imageSource: require("react-native-language-select/lib/local-assets/sweden.png"),
  },
  {
    title: "Japanese",
    imageSource: require("react-native-language-select/lib/local-assets/japan.png"),
  },
];

export default function WelcomeScreen() {
  const [langPick, setLangPick] = useState(false);
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
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={{width: 24, height: 24}} source={require("react-native-language-select/lib/local-assets/sweden.png")}/>
              <Text style={{ paddingLeft: 10}}>Jr</Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={openPrivacy}>
              <Text>{i18n.t("privacyPolicy")}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: "absolute", zIndex: 1, display: "none", alignItems: "center", justifyContent: "flex-end", borderWidth: 1, height: "100%", width: "100%" }}>
          <View>
            <LanguagePicker
                initialIndex={1}
                data={data}
                onSelect={(selectedItem: ILanguagePicker) => {
                  console.log(selectedItem);
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});