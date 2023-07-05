import React from 'react';
import {Text} from 'react-native-ui-lib';

type Text24Props = { children?: any, style?: any , fs12?: any, fs14?: any, fs16?: any, fs18?: any, fs20?: any, fs22?: any, fs24?: any, fs28?: any, fs36?: any, normal?: any, lighter?: any, left?: any, right?: any, selectable?: any };

export const Text24 = (props : Text24Props) => {
    const { children, style, fs12, fs14, fs16, fs18, fs20, fs22, fs24, fs28, fs36, normal, lighter, left, right, selectable }
        = props;
    const fontSize =
        fs12 && 12 ||  fs14 && 14 || fs16 && 16 || fs18 && 18 || fs20 && 20 || fs22 && 22 || fs24 && 24 || fs28 && 28 || fs36 && 36 || 20;
    const fontWeight = normal && "normal" || lighter && "lighter" || "bold";
    const textAlign = left && "left" || right && "right" || "center";

    return (
        <Text selectable={selectable} style={[{ fontSize: fontSize, fontWeight: fontWeight, color: "#2A2A46", textAlign: textAlign }, style]}>
            {children}
        </Text>
    );
};