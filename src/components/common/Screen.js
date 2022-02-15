import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../config/colors';

const Screen = ({ children, style }) => {
    return (
        <>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor={colors.bgColor}
            ></StatusBar>
            <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
        </>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: hp(1),
        backgroundColor: colors.bgColor,
        flex: 1,
    }
});