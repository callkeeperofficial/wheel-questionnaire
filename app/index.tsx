import {StyleSheet, TouchableOpacity, Image, Platform, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import { useRouter } from "expo-router";
import { megaCreator } from "../components/utils/ImageUtility";
import { goToTest, openPrivacy } from "../components/utils/StaticFunctions";
import {ContainerTemplate} from "../components/molecules/ContainerTemplate";
import {i18n} from "../components/molecules/i18n";


export default function WelcomeScreen() {
  const router = useRouter();
  const imageHeight = Dimensions.get('window').width - 100;
  console.log("WelcomeScreen", imageHeight);
  return (
      <ContainerTemplate>
          <View style={{width: "100%" }}>
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
          <View><Text>Ru</Text></View>
          <View>
            <TouchableOpacity onPress={openPrivacy}>
              <Text>{i18n.t("privacyPolicy")}</Text>
            </TouchableOpacity>
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
    width: "100%",
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
