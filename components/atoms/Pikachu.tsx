import React from "react";
import {
    AntDesign,
    Feather,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons
} from '@expo/vector-icons';


type PikachuProps = { source: string, size?: number, color?: string, style?: object };

export const Pikachu = (props: PikachuProps) => {
    const { source, size, color, style } = props;

    const pickRightFont = (source: string | undefined) => {
        switch(source) {
            case "checkmark":
            case "notifications-outline":
            case "reload":
            case "male":
            case "female":
            case "transgender":
            case "notifications":
                return <Ionicons
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            case "close":
            case "plus":
            case "minus":
            case "arrowdown":
                return <AntDesign
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            case "chevron-left":
            case "chevron-right":
            case "flag":
            case "sunrise":
            case "sunset":
                return <Feather
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            case "gender-female":
            case "eraser":
            case "chart-arc":
                return <MaterialCommunityIcons
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            case "privacy-tip":
            case "content-copy":
            case "subscriptions":
            case "restore":
                return <MaterialIcons
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            case "magnifier":
                return <SimpleLineIcons
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            case "document":
                return <Ionicons
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />;
            default: return <FontAwesome5
                name={source}
                size={size ? size : "24"}
                color={color ? color : "#2A2A46"}
                style={style}
            />
        }
    };
    return ( <>{ pickRightFont(source) }</> );
};