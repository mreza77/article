import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import colors from '../../config/colors';

const CustomText = ({ children, style, ...rest }) => {

    return (
        <Text
            style={[styles.default, style]}
            {...rest}
        >{children}</Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    default: {
        color: colors.white,
        fontWeight: "400",
        fontSize: wp(4)
    }
});