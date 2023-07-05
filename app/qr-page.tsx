import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from "expo-router";
import { BlackLink } from "../components/atoms/BlackLink";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../components/contexts/GlobalContext";
import { loadSegments } from "../components/utils/LocalWherhouse";
import { appLogo } from "../components/utils/ImageUtility";
import { goBack, goToLiferadar } from "../components/utils/StaticFunctions";


export default function QrPage() {
  const router = useRouter();
  const { segments, setSegments } = useContext(GlobalContext);

  useEffect(() => {
    // console.log("QrPage", "useEffect", segments);
    if (segments.length === 0) {
      setSegments(loadSegments());
    }
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={appLogo}/>
          <View style={styles.marginTop20}/>
          <Text style={styles.title}>Откройте приложение Liferadar</Text>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>И введите код в раделе Колесо Баланса:</Text>
          <View style={styles.marginTop20}/>
          <View style={styles.numbersTextView}>
            <View style={styles.transparentBackground}/>
            <Text style={styles.numbersText}>{segments.join("")}</Text>
          </View>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>Колесо Жизненного Баланса и результаты теста уже ждут вас в приложении Liferadar 🙏🏻</Text>
          <View style={styles.marginTop20}/>
          <View style={styles.takeTestButton}>
            <TouchableOpacity onPress={goToLiferadar(segments.join(""))}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Скачать</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.marginTop20}/>
          <BlackLink textStyle={styles.linkTextStyle} onPress={goBack.bind(null, router)}>Вернуться назад</BlackLink>
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
    justifyContent: 'space-around',
    width: 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50
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
    // flex: 1s,
    width: 250,
    height: 250,
    // backgroundColor: '#0553',
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
  numbersText: {
    // width: "100%",
    color: "#206CEB",
    fontSize: 34,
    letterSpacing: 10,
    fontWeight: "bold"
  },
  numbersTextView: {
    justifyContent: "center",
    // background: "linear-gradient(90deg, rgba(32,108,235,0) 7%, rgba(32,108,235,0.2861519607843137) 7%)",
    borderColor: "#206CEB",
    borderWidth: 1,
    borderStyle: "dashed",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  transparentBackground: {
    position: "absolute",
    left: 0,
    backgroundColor: "#206CEB20",
    width: "100%",
    height: "100%"
  },
  marginTop20: {
    marginTop: 20,
  }
});
