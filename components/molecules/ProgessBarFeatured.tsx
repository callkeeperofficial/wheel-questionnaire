import React from 'react';
import { ProgressBar, View } from "react-native-ui-lib";
import { Gap } from "../atoms/Gap";
import { StyleSheet , Text } from "react-native";

type IProgressBarFeatured = {
    text?: string,
    textRight?: any,
    barStyle?: object,
    progress?: number,
    containerStyle?: object,
    progressColor?: string,
    textStyle?: object,
    textBottomLeft?: any,
    textBottomRight?: any
};

export const ProgressBarFeatured = (props: IProgressBarFeatured) => {
    const {
        text,
        textRight,
        barStyle,
        progress,
        containerStyle,
        progressColor,
        textStyle,
        textBottomLeft,
        textBottomRight
    } = props;
    const containerStyleInternal = { width: "100%", ...containerStyle, };
    const barStyleInternal = { width: "100%", height: 10, ...barStyle, };

    return (
        <View style={containerStyleInternal}>
            { (text || textRight) && <><Gap/><View row spread paddingH-5>
                <Text style={[styles.projectText, textStyle]}>{text}</Text>
                <Text style={[styles.projectText, textStyle]}>{textRight}</Text>
            </View></>}
            <ProgressBar style={barStyleInternal} fullWidth progress={progress} progressColor={progressColor}/>
            { (textBottomLeft || textBottomRight) && <><Gap/><View row spread paddingH-5>
                <Text style={[styles.projectText, textStyle]}>{textBottomLeft}</Text>
                <Text style={[styles.projectText, textStyle]}>{textBottomRight}</Text>
            </View></>}
        </View>
    );
};

const styles = StyleSheet.create({
    projectText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});