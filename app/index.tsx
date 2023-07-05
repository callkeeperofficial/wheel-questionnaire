import {StyleSheet, TouchableOpacity, Image, Platform, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import { useRouter } from "expo-router";
import { megaCreator } from "../components/utils/ImageUtility";
import { goToTest, openPrivacy } from "../components/utils/StaticFunctions";
import {ContainerTemplate} from "../components/molecules/ContainerTemplate";


export default function WelcomeScreen() {
  const router = useRouter();
  const imageHeight = Dimensions.get('window').width - 100;

  return (
      <ContainerTemplate>
          <View style={{width: "100%" }}>
            <Image style={[styles.image, { height: imageHeight }]} source={megaCreator} resizeMode={"contain"}/>
          </View>
          <Text style={styles.title}>Добро пожаловать!</Text>
          <Text style={styles.description}>Готовы узнать больше о себе и своих потребностях? Наш тест - это великолепный инструмент для глубокого погружения в свои жизненные области и для понимания, какие из них требуют вашего внимания. Это поможет вам достичь гармонии и баланса в жизни. Не упустите эту возможность узнать себя лучше - начните тест прямо сейчас!</Text>
          <View style={styles.takeTestButton}>
            <TouchableOpacity onPress={goToTest.bind(null, router)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Пройти тест</Text>
              </View>
            </TouchableOpacity>
          </View>
        <View style={styles.footer}>
          <View><Text>Ru</Text></View>
          <View>
            <TouchableOpacity onPress={openPrivacy}>
              <Text>Политика конфединциальности</Text>
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
