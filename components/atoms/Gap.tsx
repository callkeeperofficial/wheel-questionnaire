import React from 'react';
import { View } from 'react-native-ui-lib';

type GapProps = { h20?: any, h30?: any, h40?: any, h50?: any, h60?: any, h70?: any, h80?: any, h90?: any, h100?: any, height?: number };

export const Gap = (props : GapProps) => {
    const { h20, h30, h40, h50, h60, h70, h80, h90, h100, height } = props;
    const h = h20 && 20 || h30 && 30 || h40 && 40 || h50 && 50 || h60 && 60 || h70 && 70 || h80 && 80 || h90 && 90
        || h100 && 100 || height || 10;

    return (
        <View style={{ height: h, width: h }} />
    );
};