import AsyncStorage from '@react-native-async-storage/async-storage';
import {UIDGenerator} from '../utils/UIDGenerator';



export const addProduct = async (name, uom, quantity, vat, netPrice ) => {
  try {
    const id = UIDGenerator();
    const product = JSON.stringify({ id, name, uom, quantity, vat, netPrice });
    await AsyncStorage.setItem(`product_${id}`, product);
    console.log('Product added successfully');
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

export const getProduct = async (id) => {
  try {
    const product = await AsyncStorage.getItem(`product_${id}`);
    return product ? JSON.parse(product) : null;
  } catch (error) {
    console.error('Error getting product:', error);
    return null;
  }
};

export const updateProduct = async (id, name, uom, quantity, vat, netPrice) => {
  try {
    const product = await getProduct(id);
    if (product) {
      const updatedProduct = JSON.stringify({ id, name, uom, quantity, vat, netPrice });
      await AsyncStorage.setItem(`product_${id}`, updatedProduct);
      console.log('Product updated successfully');
    } else {
      console.log('Product not found');
    }
  } catch (error) {
    console.error('Error updating product:', error);
  }
};



export const getAllProducts = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const productKeys = keys.filter(key => key.startsWith('product_'));
    const products = await AsyncStorage.multiGet(productKeys);
    return products.map(([key, value]) => JSON.parse(value));
  } catch (error) {
    console.error('Error getting all products:', error);
    return [];
  }
};


export const removeProduct = async (id) => {
  try {
    await AsyncStorage.removeItem(`product_${id}`);
    console.log('Product removed successfully');
  } catch (error) {
    console.error('Error removing product:', error);
  }
};
