import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles.tsx';

import { addProduct } from '../../../../database/productService.js';
import CustomInput from '../../../../components/CustomInput/CustomInput.tsx';
import { useNavigation } from '@react-navigation/native';


const AddProductForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigation();


    const handleAddCustomer = async (data) => {
        await addProduct(data.name, data.uom, data.quantity, data.vat, data.netPrice);
        navigation.goBack();
      };

      useEffect(() => {
        if (errors.name) Alert.alert('Błąd', errors.name.message);
    }, [errors]);

  return (
      <ScrollView style={styles.container}>

        <CustomInput 
            label={"Nazwa"}
            rules= {{required: 'Nazwa jest wymagana' }}
            name={"name"}
            placeholder={"Wprowadź nazwę"}
            control={control}
        />

        
        <CustomInput 
            label={"Jednostka miary"}
            name={"uom"}
            placeholder={"Wprowadź jednostkę miary"}
            control={control}
        />

        <CustomInput 
            label={"Ilość"}
            name={"quantity"}
            placeholder={"Wprowadź ilość"}
            control={control}
        />

        <CustomInput 
            label={"Stawka VAT"}
            name={"vat"}
            placeholder={"Wprowadź stawkę VAT"}
            control={control}
        />

        <CustomInput 
            label={"Cena netto"}
            name={"netPrice"}
            placeholder={"Wprowadź cenę netto"}
            control={control}
        />


    <TouchableOpacity style={styles.button}  onPress={handleSubmit(handleAddCustomer)} > 
      <Text style={styles.text} >Dodaj produkt</Text>
    </TouchableOpacity>

    </ScrollView>
  )
} 

export default AddProductForm;
