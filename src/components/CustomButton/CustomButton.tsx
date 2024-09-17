import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CustomButton = ({onClick, text, disabled = false}) => {
    return (
        <TouchableOpacity disabled={disabled} style={disabled ? styles.buttonDisabled : styles.button}  onPress={onClick} > 
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;