import React, { useRef, useEffect, useContext, MutableRefObject } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import { BlackLink } from "../components/atoms/BlackLink";
import lottie from "lottie-web";
import congratulationConfettiModule from "../assets/images/lottie/congratulation-confetti.json";
import { goToLiferadar, goToQrPage } from "../components/utils/StaticFunctions";
import { GlobalContext } from "../components/contexts/GlobalContext";
import { ContainerTemplate } from "../components/molecules/ContainerTemplate";
import { i18n } from "../components/molecules/i18n";


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
        // path: congratulationConfetti, // the path to the animation json
        animationData: congratulationConfettiModule
      });
    }
  }, []);

  return (
      <ContainerTemplate
          heroElement={<div style={styles.lottieContainer} ref={lottieContainer as MutableRefObject<HTMLDivElement>}/>}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{i18n.t("congratulations")}</Text>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>{i18n.t("nowYouFillWheel")}</Text>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>{i18n.t("congratulationDescription")}</Text>
          <View style={styles.marginTop20}/>
          <View style={styles.takeTestButton}>
            <TouchableOpacity onPress={goToLiferadarLocal}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{i18n.t("download")}</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.marginTop20}/>
          <BlackLink textStyle={styles.linkTextStyle} onPress={goToQrPage.bind(null, router)}>
            {i18n.t("downloadAlready")}
          </BlackLink>
        </View>
      </ContainerTemplate>
  );
}

const styles = StyleSheet.create({
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
    position: "relative",
    left: 0,
    top: -50,
    // borderWidth: 1,
    // borderStyle: "dashed",
  },
  marginTop20: {
    marginTop: 20,
  },
  contentContainer: {
    position: "relative",
    top: -100,
    alignItems: "center",
  }
});
