import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, ScrollView, TouchableOpacity, Alert, View } from 'react-native';
import styles from './styles.tsx';

import { updateProduct, getProduct } from '../../../../database/productService.js';
import CustomInput from '../../../../components/CustomInput/CustomInput.tsx';
import { useNavigation } from '@react-navigation/native';


const EditProductForm = ({productId}) => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigation = useNavigation();

    const handleUpdateProduct = async (data) => {
        await updateProduct(productId, data.name, data.uom, data.quantity, data.vat, data.netPrice );
        navigation.goBack();
      };

    const getProductData = async() => {
        const productData = await getProduct(productId);
            if (productData) {
                Object.keys(productData).forEach(key => {
                    setValue(key, productData[key]);
                });
            }
    }

      useEffect(() => {
        if (errors.name) Alert.alert('Błąd', errors.name.message);
    }, [errors]);

    useEffect(() => {
        getProductData();
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

    <TouchableOpacity style={styles.button}  onPress={handleSubmit(handleUpdateProduct)} > 
      <Text style={styles.text} >Aktualizuj produkt</Text>
    </TouchableOpacity>

    </View>
  )
} 

export default EditProductForm;
