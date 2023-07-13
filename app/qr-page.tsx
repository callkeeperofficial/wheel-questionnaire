import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from "expo-router";
import { BlackLink } from "../components/atoms/BlackLink";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../components/contexts/GlobalContext";
import { loadSegments } from "../components/utils/LocalWherhouse";
import { appLogo } from "../components/utils/ImageUtility";
import { goToFinish, goToLiferadar } from "../components/utils/StaticFunctions";
import { ContainerTemplate } from "../components/molecules/ContainerTemplate";
import { i18n } from "../components/molecules/i18n";
import { useClearRoute } from "../components/hooks/useClearRoute";
import { usePageViewFacebook } from "../components/hooks/useFacebookPixel";


export default function QrPage() {
  usePageViewFacebook();
  useClearRoute();

  const router = useRouter();
  const { segments, setSegments } = useContext(GlobalContext);
  const goToApp = goToLiferadar(segments.join(""));

  useEffect(() => {
    // console.log("QrPage", "useEffect", segments);
    if (segments.length === 0) {
      setSegments(loadSegments());
    }
  }, []);

  return (
      <ContainerTemplate>
          <TouchableOpacity onPress={goToApp}>
            <Image style={styles.image} source={appLogo}/>
          </TouchableOpacity>
          <View style={styles.marginTop20}/>
          <Text style={styles.title}>{i18n.t("openLiferadar")}</Text>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>{i18n.t("enterCode")}</Text>
          <View style={styles.marginTop20}/>
          <TouchableOpacity onPress={goToApp}>
              <View style={styles.numbersTextView}>
                    <View style={styles.transparentBackground}/>
                    <Text style={styles.numbersText}>{segments.join("")}</Text>
              </View>
          </TouchableOpacity>
          <View style={styles.marginTop20}/>
          <Text style={styles.description}>{i18n.t("wheelAwaitsYou")} 🙏🏻</Text>
          <View style={styles.marginTop20}/>
          <View style={styles.takeTestButton}>
            <TouchableOpacity onPress={goToLiferadar(segments.join(""))}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{i18n.t("openApp")}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.marginTop20}/>
          <BlackLink textStyle={styles.linkTextStyle} onPress={goToFinish.bind(null, router)}>
              {i18n.t("back")}
          </BlackLink>
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
