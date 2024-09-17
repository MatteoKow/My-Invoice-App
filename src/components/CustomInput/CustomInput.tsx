import * as React from 'react';
import { Controller } from 'react-hook-form';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
const CustomInput = (props) => {

    const { label, name, control, placeholder,rules} = props; 
    return (
        <View style={styles.inputBox}>
        <Text style={styles.name}>{label}</Text>

        <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#888888"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
        )}
        name={name}
      />

 
        </View>
    );
};

export default CustomInput;