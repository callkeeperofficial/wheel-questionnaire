import React from 'react';
import { ProgressBar, View } from "react-native-ui-lib";
import { Gap } from "../atoms/Gap";
import { StyleSheet , Text } from "react-native";

export const ProgressBarFeatured = ({
                                        text,
                                        textRight,
                                        barStyle,
                                        progress,
                                        containerStyle,
                                        progressColor,
                                        textStyle,
                                        textBottomLeft,
                                        textBottomRight
}) => {

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