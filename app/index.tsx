import {  StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useRouter } from "expo-router";
import { megaCreator } from "../components/utils/ImageUtility";
import { goToTest, openPrivacy } from "../components/utils/StaticFunctions";


export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={megaCreator}/>
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
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eee",
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  description: {
    fontSize: 18,
    textAlign: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 400,
    height: 400,
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
