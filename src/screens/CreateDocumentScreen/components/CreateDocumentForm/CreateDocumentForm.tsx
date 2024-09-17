import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, ScrollView, TouchableOpacity, Alert, View, Modal, Button } from 'react-native';
import styles from './styles.tsx';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './components/ProgressBar/ProgressBar.tsx';
import CustomButton from '../../../../components/CustomButton/CustomButton.tsx';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
import SellerInfo from './components/SellerInfo/SellerInfo.tsx';
import CustomerInfo from './components/CustomerInfo/CustomerInfo.tsx';
import ProductInfo from './components/ProductInfo/ProductInfo.tsx';
import DocumentInfo from './components/DocumentInfo/DocumentInfo.tsx';
import { generateDocument } from '../../../../utils/generateDocument.js';
import Pdf from 'react-native-pdf';
const CreateDocumentForm = () => {
    const resourceType = 'file'; // 'base64', 'url', 'file', 'data' - typ źródła

    const source = { uri: './Users/mateuszkowalski/Library/Developer/CoreSimulator/Devices/8737D44B-4687-4868-8A0D-A54358D2E85E/data/Containers/Data/Application/A6D1B6F1-CE1F-455A-BF82-1A15A840DB3C/Documents/form.pdf', cache: true };
    const { control, setValue, getValues, formState: { errors } } = useForm({
        defaultValues: {
            seller: {},
            customer: {},
            products: [],
            info:{
              invoiceNumber: '1'
            }
        }
    });
    const [step, setStep] = useState(0);

    const increaseStep = () => setStep(step + 1);
    const decreaseStep = () => setStep(step - 1); 

    const createDocument = async () => {
        try {
          const data = getValues();
          const uri = await generateDocument(data);
       
        } catch (error) {
          // Handle error if needed
        }
      };
    
    const stepPage = [
        <SellerInfo setValue={setValue} getValues={getValues} increaseStep={increaseStep}/>, 
        <CustomerInfo control={control} setValue={setValue}  getValues={getValues} increaseStep={increaseStep} decreaseStep={decreaseStep}/>, 
        <ProductInfo control={control} setValue={setValue} getValues={getValues} increaseStep={increaseStep} decreaseStep={decreaseStep}/>, 
        <DocumentInfo setValue={setValue} getValues={getValues} control={control} createDocument={createDocument} decreaseStep={decreaseStep} />
    ]; 

    

    useEffect(() => {
        if (errors.name) Alert.alert('Błąd', errors.name.message);
    }, [errors]);

  return (
    <View style={styles.container}>
        <ProgressBar step={step}/>
        <View style={styles.createDocumentForm}>
            {stepPage[step]}
        </View>
    </View>
  );
};

export default CreateDocumentForm;
