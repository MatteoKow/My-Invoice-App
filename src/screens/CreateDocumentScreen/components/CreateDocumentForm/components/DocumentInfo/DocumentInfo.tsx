import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import CustomInput from '../../../../../../components/CustomInput/CustomInput';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';
import DatePicker from 'react-native-date-picker';
import CustomDateInput from '../../../../../../components/CustomDateInput/CustomDateInput';
import { Controller } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

const DocumentInfo = ({ setValue, getValues, control, decreaseStep, createDocument }) => {
    const [issueDate, setIssueDate] = useState(new Date());
    const [saleDate, setSaleDate] = useState(new Date());
    const [maturity, setMaturity] = useState(new Date());
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [invoiceNumber, setInvoiceNumber] = useState('');


    
    const [open, setOpen] = useState(false);
    const [currentDateType, setCurrentDateType] = useState(null);

    useEffect(() => {
        // Set initial dates based on values from getValues
        const initialIssueDate = getValues('info.issueDate') || new Date();
        const initialSaleDate = getValues('info.saleDate') || new Date();
        const initialMaturity = getValues('info.maturity') || new Date();
        const initialPaymentMethod = getValues('info.paymentMethod') || null;
        const initialInvoiceNumber = getValues('info.invoiceNumber') || '1';

      
        
        setValue('info.issueDate', initialIssueDate);
        setValue('info.saleDate', initialSaleDate);
        setValue('info.maturity', initialMaturity);
        setValue('info.invoiceNumber', initialInvoiceNumber);


        setIssueDate(initialIssueDate);
        setSaleDate(initialSaleDate);
        setMaturity(initialMaturity);
        setPaymentMethod(initialPaymentMethod);
        setInvoiceNumber(initialInvoiceNumber);

    }, [getValues, setValue]);

    const handleOpenDatePicker = (type) => {
        setCurrentDateType(type);
        setOpen(true);
    };

    const handleDateConfirm = (date) => {
        setOpen(false);
        if (currentDateType === 'issue') {
            setIssueDate(date);
            setValue('info.issueDate', date);
        } else if (currentDateType === 'sale') {
            setSaleDate(date);
            setValue('info.saleDate', date);
        } else if (currentDateType === 'maturity') {
            setMaturity(date);
            setValue('info.maturity', date);
        }
    };

    return (
        <View style={styles.customerInfo}>
            <Text style={styles.title}>Dane dokumentu</Text>


            <View style={styles.invoiceNumberContainer}>
                <View style={styles.invoiceNumberBox}>
                    <Text style={styles.invoiceNumber} >{issueDate.getFullYear()} / {(issueDate.getMonth() + 1).toString().padStart(2, '0')}  / </Text>
                <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput
                        style={styles.invoiceInput}
                        placeholder={"Nr"}
                        placeholderTextColor="#888888"
                        onBlur={onBlur}
                        onChangeText={(text) => {
                            const normalizedText = text.replace(/[^0-9]/g, '');
                            onChange(normalizedText);
                            setInvoiceNumber(normalizedText)
                        }}
                        keyboardType="numeric"
                        value={value}
                    />
                )}
                name="info.invoiceNumber"
                />
                </View>
            </View>

            <DatePicker
                modal
                open={open}
                locale='pl'
                title={"Wybierz datę"}
                mode={"date"}
                confirmText="Zapisz"
                cancelText={"Anuluj"}
                date={currentDateType === 'issue' ? issueDate : saleDate}
                onConfirm={handleDateConfirm}
                onCancel={() => setOpen(false)}
            />

            <CustomDateInput 
                label="Data wystawienia" 
                date={issueDate} 
                action={() => handleOpenDatePicker('issue')}
            />
            <CustomDateInput 
                label="Data sprzedaży" 
                date={saleDate} 
                action={() => handleOpenDatePicker('sale')}
            />

            <CustomDateInput 
                label="Termin płatności" 
                date={maturity} 
                action={() => handleOpenDatePicker('maturity')}
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TouchableOpacity style={styles.inputBox}>
                        <Text style={styles.name}>Forma płatności</Text>
                        <View style={styles.input}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Wybierz metodę płatności',
                                    value: null,
                                    color: '#9EA0A4',
                                }}
                                onValueChange={(value)=> {
                                    onChange(value);
                                    setPaymentMethod(value);
                                }}
                                items={[
                                    { label: 'Przelew', value: 'Przelew' },
                                    { label: 'Gotówka', value: 'Gotówka' },
                                ]}
                                value={value}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                name="info.paymentMethod"
            />

            <View style={styles.buttonArea}>
                <CustomButton onClick={decreaseStep} text={"Cofnij"} />
                <CustomButton disabled={(invoiceNumber !== '') && (paymentMethod !== null) ? false : true} onClick={createDocument} text={"Utwórz"} />
            </View>
        </View>
    );
};

export default DocumentInfo;
