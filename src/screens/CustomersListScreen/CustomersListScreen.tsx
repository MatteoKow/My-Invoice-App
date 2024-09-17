import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView, TextInput } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import styles from './styles.tsx';

import {getAllCustomers, removeCustomer} from '../../database/customerService.js';
import CustomerListItem from './components/CustomerListItem/CustomerListItem.tsx';
import TemplateUI from '../../templates/TemplateUI/TemplateUI.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';

const CustomersListScreen = () => {
      const [customers, setCustomers] = useState([]);
      const [searchData, setSearchData] = useState('');

      const isFocused = useIsFocused();
      const navigation = useNavigation();

      const fetchCustomers = async () => {
        const allCustomers = await getAllCustomers();
        setCustomers(allCustomers);
      };

      const handleInfoCustomer = async (id) => {
        navigation.navigate('InfoCustomer',{customerId: id})
      };

      useEffect(() => {
        if (isFocused) {
          fetchCustomers();
        }
      }, [isFocused]);

      const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchData.toLowerCase())
      );

  return (
    <TemplateUI>
      <View style={styles.container}>
        <SearchBar searchData={searchData} setSearchData={setSearchData}/>
        {filteredCustomers.map(customer => (
          <CustomerListItem
            key={customer.id}
            customer={customer}
            handleEditCustomer={handleInfoCustomer}
          />
        ))}
      </View>
    </TemplateUI>

  )
} 

export default CustomersListScreen;
