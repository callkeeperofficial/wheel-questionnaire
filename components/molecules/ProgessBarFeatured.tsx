import React from 'react';
import { ProgressBar, View } from "react-native-ui-lib";
import { Text24 } from "../atoms/Text24";
import { Gap } from "../atoms/Gap";

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
                <Text24 fs20 style={[textStyle]}>{text}</Text24>
                <Text24 fs20 style={[textStyle]}>{textRight}</Text24>
            </View></>}
            <ProgressBar style={barStyleInternal} fullWidth progress={progress} progressColor={progressColor}/>
            { (textBottomLeft || textBottomRight) && <><Gap/><View row spread paddingH-5>
                <Text24 fs20 style={[textStyle]}>{textBottomLeft}</Text24>
                <Text24 fs20 style={[textStyle]}>{textBottomRight}</Text24>
            </View></>}
        </View>
    );
};