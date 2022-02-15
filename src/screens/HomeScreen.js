import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, RefreshControl, ActivityIndicator, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FloatingAction } from "react-native-floating-action";

import { getData } from "../services/common.service";
import colors from '../config/colors';
import ArticleRenderItem from '../components/RenderItem/ArticleRenderItem';
import Screen from '../components/common/Screen';
import CustomText from '../components/common/CustomText';
import nouns from '../enums/nouns.json';


const actions = [
   {
      text: nouns["HOT"],
      name: nouns["HOT"],
      position: 2,
      icon: <CustomText>{nouns["HOT"]}</CustomText>,
      buttonSize: wp(11),
      color: colors.blueViolet
   },
   {
      text: nouns["POPULAR"],
      name: nouns["RISING"],
      position: 1,
      icon: <CustomText>{nouns["POPULAR"]}</CustomText>,
      buttonSize: wp(17),
      color: colors.blueViolet
   },
   {
      text: nouns["NEW"],
      name: nouns["NEW"],
      position: 3,
      icon: <CustomText>{nouns["NEW"]}</CustomText>,
      buttonSize: wp(11),
      color: colors.blueViolet
   },
   {
      text: nouns["TOP"],
      name: nouns["TOP"],
      position: 4,
      icon: <CustomText>{nouns["TOP"]}</CustomText>,
      buttonSize: wp(11),
      color: colors.blueViolet
   }
];

const HomeScreen = () => {
   const [refresh, setRefresh] = useState(false)
   const [loading, setLoading] = useState(true)
   const [data, setData] = useState(null)
   const [selectFilter, setSelectFilter] = useState(nouns["HOT"])

   useEffect(() => {
      getList();
   }, [selectFilter]);

   const getList = async () => {
      setData(await getData(`/${selectFilter}`))
      setLoading(false)
   }

   const refreshData = () => {
      setLoading(true)
      getList()
   }

   return (
      <Screen>
         {loading ?
            <View style={styles.indicator}>
               <ActivityIndicator size="large" color={colors.white} />
            </View>
            :
            <FlatList
               style={styles.container}
               data={data?.data?.data?.children}
               renderItem={(item) => {
                  return (
                     <ArticleRenderItem
                        {...item}
                     ></ArticleRenderItem>
                  )
               }}
               showsVerticalScrollIndicator={false}
               refreshControl={
                  <RefreshControl
                     refreshing={refresh}
                     onRefresh={() => refreshData()}
                     title={"pull_refresh"}
                     tintColor={colors.white}
                     titleColor={colors.white}
                  />
               }
            />
         }
         <FloatingAction
            actions={actions}
            onPressItem={name => {
               setLoading(true)
               setSelectFilter(name)
            }}
            position={"left"}
            floatingIcon={<CustomText>{nouns["FILTER"]}</CustomText>}
            color={colors.danger}
            buttonSize={wp(15)}
         />
      </Screen>
   )
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
      marginVertical: hp(2)
   },
   indicator: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   }
});