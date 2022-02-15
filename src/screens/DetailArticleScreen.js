import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import Screen from '../components/common/Screen';
import colors from '../config/colors';

const DetailArticleScreen = ({ route }) => {
    const [loading, setLoading] = useState(true)

    return (
        <Screen>
            {loading &&
                <View style={styles.indicator}>
                    <ActivityIndicator size="large" color={colors.white} />
                </View>
            }
            <WebView
                containerStyle={loading ? { display: "none" } : { display: "flex" }}
                source={{ uri: route.params.link }}
                onLoadEnd={() => {
                    setLoading(false)
                }}
            />
        </Screen>
    )
}

export default DetailArticleScreen

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});