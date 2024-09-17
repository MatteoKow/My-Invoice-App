import AsyncStorage from '@react-native-async-storage/async-storage';
import {UIDGenerator} from '../utils/UIDGenerator';



export const addCustomer = async (name, address, city, code, nip, email, phone, description ) => {
  try {
    const id = UIDGenerator();
    const customer = JSON.stringify({ id, name, address, city, code, nip, email, phone, description });
    await AsyncStorage.setItem(`customer_${id}`, customer);
    console.log('Customer added successfully');
  } catch (error) {
    console.error('Error adding customer:', error);
  }
};

export const getCustomer = async (id) => {
  try {
    const customer = await AsyncStorage.getItem(`customer_${id}`);
    return customer ? JSON.parse(customer) : null;
  } catch (error) {
    console.error('Error getting customer:', error);
    return null;
  }
};

export const updateCustomer = async (id, name, address, city, code, nip, email, phone, description) => {
  try {
    const customer = await getCustomer(id);
    if (customer) {
      const updatedCustomer = JSON.stringify({ id, name, address, city, code, nip, email, phone, description });
      await AsyncStorage.setItem(`customer_${id}`, updatedCustomer);
      console.log('Customer updated successfully');
    } else {
      console.log('Customer not found');
    }
  } catch (error) {
    console.error('Error updating customer:', error);
  }
};



export const getAllCustomers = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const customerKeys = keys.filter(key => key.startsWith('customer_'));
    const customers = await AsyncStorage.multiGet(customerKeys);
    return customers.map(([key, value]) => JSON.parse(value));
  } catch (error) {
    console.error('Error getting all customers:', error);
    return [];
  }
};


export const removeCustomer = async (id) => {
  try {
    await AsyncStorage.removeItem(`customer_${id}`);
    console.log('Customer removed successfully');
  } catch (error) {
    console.error('Error removing customer:', error);
  }
};
