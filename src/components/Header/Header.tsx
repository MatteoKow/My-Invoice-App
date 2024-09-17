import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({title, isBackButton}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            {isBackButton ?
            <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backButton}>
                <Text style={styles.arrow}>{"<"}</Text>
            </TouchableOpacity> : null
        }
            <Text style={styles.title}>{title}</Text>
        </View>
        
    );
};


export default Header;
