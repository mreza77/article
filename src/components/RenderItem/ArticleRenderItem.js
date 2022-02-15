import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";

import colors from '../../config/colors';
import nouns from '../../enums/nouns.json';
import CustomText from '../common/CustomText';
import routes from '../../navigation/routes';
import { parseTimeStamp } from '../../utils/helper';

const ArticleRenderItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routes.DETAIL, { link: item?.data?.url })}
            style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={{ uri: item?.data?.all_awardings[0]?.icon_url }}
                    style={styles.image}
                    resizeMode={"contain"}
                ></Image>
                <View style={styles.main}>
                    <CustomText>{nouns["SUBJECT"]}{" : "} {item?.data?.title}</CustomText>
                    <CustomText>{nouns["WRITER.NAME"]}{" : "} {item?.data?.author_fullname}</CustomText>
                    <CustomText>{nouns["NUMBER.COMMENTS"]}{" : "} {item?.data?.num_comments}</CustomText>
                    <CustomText>{nouns["SCORE"]}{" : "} {item?.data?.score}</CustomText>
                    <CustomText>{nouns["DATE"]}{" : "} {parseTimeStamp(item?.data?.created)}</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ArticleRenderItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    box: {
        width: wp(90),
        backgroundColor: colors.light,
        marginVertical: hp(1.5),
        borderRadius: wp(3),
        overflow: "hidden"
    },
    image: {
        width: wp(90),
        height: hp(15),
    },
    main: {
        width: wp(90),
        backgroundColor: colors.bgModalColor,
        alignItems: "flex-end",
        paddingHorizontal: wp(5),
        paddingVertical: wp(5)
    }
});