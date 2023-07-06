import React from 'react';
import { TouchableOpacity, View } from 'react-native-ui-lib';
import { Text24 } from "./Text24";
import { Pikachu } from "./Pikachu";


type BlackLinkProps = {
    onPress: Function,
    children: any,
    style: object,
    chevron: boolean,
    chevronRight: boolean,
    textStyle: object,
}

export const BlackLink = (props: BlackLinkProps) => {
    const { onPress, children, style, chevron, chevronRight, textStyle } = props;

    return (
        <TouchableOpacity padding-3 onPress={onPress} style={[style]}>
            <View row>
                {/*{chevron && <Pikachu source={"chevron-left"} size={20} style={{alignSelf: "center"}}/>}*/}
                <Text24 normal fs16 style={textStyle}>{children}</Text24>
                {/*{chevronRight && <Pikachu source={"chevron-right"} size={20} style={{alignSelf: "center"}}/>}*/}
            </View>
        </TouchableOpacity>
    );
};