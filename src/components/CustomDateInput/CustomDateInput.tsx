import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { formatDate } from '../../utils/formatDate';



const CustomDateInput = (props) => {
    const { label, date, action } = props; 

    return (
        <TouchableOpacity style={styles.inputBox} onPress={action}>
            <Text style={styles.name}>{label}</Text>
            <View style={styles.input}>
                <Text>{formatDate(date)}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomDateInput;
