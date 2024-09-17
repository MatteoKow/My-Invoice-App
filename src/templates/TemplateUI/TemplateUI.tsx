import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from './styles';

const TemplateUI = ({children}) => {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.circle}></View>
            {/* <View style={styles.content}> */}
                {children}
            {/* </View> */}
        </ScrollView>
    );
};

export default TemplateUI;