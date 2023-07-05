import React, { useRef, useEffect, useContext, MutableRefObject } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import { BlackLink } from "../components/atoms/BlackLink";
import lottie from "lottie-web";
import { congratulationConfetti } from "../components/utils/ImageUtility";
import { goToLiferadar, goToQrPage } from "../components/utils/StaticFunctions";
import { GlobalContext } from "../components/contexts/GlobalContext";


export default function CongratulationsScreen() {
  const router = useRouter();
  const lottieContainer = useRef<HTMLDivElement>();
  const { segments } = useContext(GlobalContext);

  const goToLiferadarLocal = () => {
    goToLiferadar(segments.join(""))();
    goToQrPage.bind(null, router)();
  };

  useEffect(() => {
    // console.log("CongratulationsScreen", "useEffect", lottieContainer);
    if (lottieContainer.current) {
      // console.log("CongratulationsScreen", "useEffect", lottieContainer.current);
      lottie.loadAnimation({
        container: lottieContainer.current, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: congratulationConfetti// the path to the animation json
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <div style={styles.lottieContainer} ref={lottieContainer as MutableRefObject<HTMLDivElement>}/>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Поздравляем!</Text>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>Вы заполнили колесо баланса!</Text>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>Смотрите результаты и рекомендации в приложении Liferadar и узнайте в каких сферах можно черпать ресурс, а над какими стоит поработать.</Text>
          <View style={styles.marginTop20}/>
          <View style={styles.takeTestButton}>
            <TouchableOpacity onPress={goToLiferadarLocal}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Скачать</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.marginTop20}/>
          <BlackLink textStyle={styles.linkTextStyle} onPress={goToQrPage.bind(null, router)}>Я уже скачал</BlackLink>
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
  firstContainer: {
    flex: 1,
    width: 500,
    backgroundColor: "white",
    borderRadius: 20,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    paddingHorizontal: 50,
    paddingBottom: 50,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    width: 500,
    height: 500,
    borderWidth: 1
  },
  button: {
    backgroundColor: "#206CEB",
    alignItems: "center",
    borderRadius: 10
  },
  linkTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#206CEB",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  takeTestButton: {
    width: "100%"
  },
  lottieContainer: {
    left: 0,
    right: 0,
  },
  marginTop20: {
    marginTop: 20,
  }
});
