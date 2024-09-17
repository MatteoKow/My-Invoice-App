import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles.tsx';

import { updateCustomer, getCustomer } from '../../../../database/customerService.js';
import CustomInput from '../../../../components/CustomInput/CustomInput.tsx';
import { useNavigation } from '@react-navigation/native';


const EditCustomerForm = ({customerId}) => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigation = useNavigation();



    const handleAddCustomer = async (data) => {
        await updateCustomer(customerId, data.name, data.address, data.city, data.code, data.nip, data.email, data.phone, data.description );
        navigation.goBack();
      };

    const getCustomerData = async() => {
        const customerData = await getCustomer(customerId);
            if (customerData) {
                Object.keys(customerData).forEach(key => {
                    setValue(key, customerData[key]);
                });
            }
    }

      useEffect(() => {
        if (errors.name) Alert.alert('Błąd', errors.name.message);
    }, [errors]);

    useEffect(() => {
        getCustomerData();
    }, []);

  return (
      <View style={styles.container}>

        <CustomInput 
            label={"Nazwa"}
            rules= {{required: 'Nazwa jest wymagana' }}
            name={"name"}
            placeholder={"Wprowadź nazwę"}
            control={control}
        />

        
        <CustomInput 
            label={"Adres"}
            name={"address"}
            placeholder={"Wprowadź adres"}
            control={control}
        />

        <CustomInput 
            label={"Miasto"}
            name={"city"}
            placeholder={"Wprowadź miasto"}
            control={control}
        />

        <CustomInput 
            label={"Kod pocztowy"}
            name={"code"}
            placeholder={"Wprowadź kod pocztowy"}
            control={control}
        />

        <CustomInput 
            label={"NIP"}
            name={"nip"}
            placeholder={"Wprowadź NIP"}
            control={control}
        />

        <CustomInput 
            label={"Email"}
            name={"email"}
            placeholder={"Wprowadź email"}
            control={control}
        />

        <CustomInput 
            label={"Telefon"}
            name={"phone"}
            placeholder={"Wprowadź telefon"}
            control={control}
        />

        <CustomInput 
            label={"Opis"}
            name={"description"}
            placeholder={"Wprowadź opis"}
            control={control}
        />


    <TouchableOpacity style={styles.button}  onPress={handleSubmit(handleAddCustomer)} > 
      <Text style={styles.text} >Aktualizuj klienta</Text>
    </TouchableOpacity>

    </View>
  )
} 

export default EditCustomerForm;
