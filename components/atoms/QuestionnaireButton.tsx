import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';


type QuestionnaireButtonProps = {
    onPress: Function,
    label: string,
    icon: any,
    iconComponent: any,
    borderWidth: number,
    style: object,
    children: any
}

export const QuestionnaireButton = (props: QuestionnaireButtonProps) => {
    const { onPress, label, icon, iconComponent, borderWidth, style, children } = props;
    // console.log("QuestionnaireButton \"" + iconComponent + "\"");
    return (
        <View flex style={[styles.buttonContainer, style]}>
            <TouchableOpacity
                center row paddingV-10 paddingH-15
                onPress={onPress}
                style={[styles.buttonTouchable, {borderWidth: borderWidth ? 1 : 0}]}
            >
                <View row center style={styles.button}>
                    { icon && <Image width={24} height={24} source={ icon } /> }
                    { iconComponent && iconComponent }
                    <Text style={[styles.answerText, {
                        paddingLeft: iconComponent ? 5 : 0,
                        paddingRight: iconComponent ? 25 : 0
                    }]}>
                        { label && label || children }
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        width: "100%"
    },
    buttonTouchable: {
        borderRadius: 30,
        width: "100%",
        backgroundColor: "#D9D9D9",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        // paddingHorizontal: 20
    },
    buttonContainer: {
        borderRadius: 20,
        overflow: "hidden"
    },
    answerText: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    }
});