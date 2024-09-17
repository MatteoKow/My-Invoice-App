import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from './styles';
import { getAllCustomers } from '../../../../../../database/customerService';
import CustomerItem from './components/CustomerItem/CustomerItem';
import IMAGES from '../../../../../../assets/images';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';

const CustomerInfo = ({control, setValue, getValues, decreaseStep, increaseStep}) => {

    const [customers, setCustomers] = useState({});
    const [customer, setCustomer] = useState({});

    const fetchCustomers = async () => {
        const allCustomers = await getAllCustomers();
        const transformedData = allCustomers.map(customer => ({
            key: customer.id,
            value: customer.name,
            details: customer 
        }));

        setCustomers(transformedData);

      };

      const handleCustomerSelect = (key) => {
        const selectedCustomer = customers.find(customer => customer.key === key);
        if (selectedCustomer) {
            const details = selectedCustomer.details;
            const newCustomer = {
                name: details.name,
                address: details.address,
                city: details.city,
                code: details.code,
                nip: details.nip,
                email: details.email,
                phone: details.phone,
            };
            setCustomer(newCustomer);
            setValue('customer', newCustomer);
        }
    };

    const removeCustomer = () => {
        setCustomer({})
        setValue('customer', {});
    }

    const newCustomer = () => {
        const newCustomer = {
            name: "",
            address: "",
            city: "",
            code: "",
            nip: "",
            email: "",
            phone: "",
        };
        setCustomer(newCustomer);
    }


      useEffect(()=> {
        fetchCustomers();
        const customer = getValues('customer')
        setCustomer(customer);
      },[]);

    return ( 


<View style={styles.customerInfo}>
    <Text style={styles.title}>Dane klienta</Text>

    {Object.keys(customer).length > 0 ? (
   
            <>
                <CustomerItem customer={customer} removeCustomer={removeCustomer} newCustomer={newCustomer} control={control}/>
            </>
            
    ) : (
            <View style={styles.row}>
                <SelectList
                    setSelected={handleCustomerSelect}
                    data={customers}
                    save="key"
                    placeholder="Wybierz..."
                    boxStyles={styles.box}
                    dropdownStyles={styles.dropdown}
                />
                <TouchableOpacity style={styles.add} onPress={newCustomer}>
                    <Image style={styles.icon} source={IMAGES.ADD} resizeMode="contain" />
                </TouchableOpacity>
            </View>
    )}

            <View style={styles.buttonArea}>
                <CustomButton onClick={decreaseStep} text={"Cofinj"}/>
                <CustomButton disabled={Object.keys(customer).length > 0 ? false : true} onClick={increaseStep} text={"Dalej"} />
            </View>
</View>
    );
};


export default CustomerInfo;