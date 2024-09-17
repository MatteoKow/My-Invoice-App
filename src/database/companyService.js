import AsyncStorage from '@react-native-async-storage/async-storage';
import {UIDGenerator} from '../utils/UIDGenerator';
import { createLogoDirectory, deleteImage, saveImage } from '../utils/photoService';


export const addCompany = async (image, name, address, city, code, nip, email, phone ) => {
  try {
    const id = UIDGenerator();
    let imagePath = '';
    await createLogoDirectory();

    if(image) {
      imagePath = await saveImage(image, id);
    }
    const company = JSON.stringify({ imagePath, id, name, address, city, code, nip, email, phone });
    await AsyncStorage.setItem(`company_${id}`, company);
    console.log('Company added successfully');
  } catch (error) {
    console.error('Error adding company:', error);
  }
};

export const getCompany = async (id) => {
  try {
    const company = await AsyncStorage.getItem(`company_${id}`);
    return company ? JSON.parse(company) : null;
  } catch (error) {
    console.error('Error getting company:', error);
    return null;
  }
};

export const updateCompany = async (image, id, name, address, city, code, nip, email, phone) => {
  try {

    const company = await getCompany(id);
    if (company) {
        let newImagePath = company.imagePath;

        if (image === '' && company.imagePath !== '') {
          await deleteImage(company.imagePath);
          newImagePath = ''; 
        } else if (image !== '' && image === company.imagePath) {

        }else if (image !== '' && company.imagePath !== '') {
          await deleteImage(company.imagePath);
          newImagePath = await saveImage(image, id); 
        } else if (image !== '' && company.imagePath === '') {
          newImagePath = await saveImage(image, id); 
        }

      const updatedCompany = JSON.stringify({imagePath: newImagePath, id, name, address, city, code, nip, email, phone});
      await AsyncStorage.setItem(`company_${id}`, updatedCompany);
      console.log('Company updated successfully');
    } else {
      console.log('Company not found');
    }
  } catch (error) {
    console.error('Error updating company:', error);
  }
};



export const getAllCompanies = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const companyKeys = keys.filter(key => key.startsWith('company_'));
    const companies = await AsyncStorage.multiGet(companyKeys);
    return companies.map(([key, value]) => JSON.parse(value));
  } catch (error) {
    console.error('Error getting all companies:', error);
    return [];
  }
};


export const removeCompany = async (id) => {
  try {
    const company = await getCompany(id);
    if (company) {
      if(company.imagePath) await deleteImage(company.imagePath)

      await AsyncStorage.removeItem(`company_${id}`);
      console.log('Company removed successfully');
    } else {
      console.log('Company not found');
    }
    
  } catch (error) {
    console.error('Error removing company:', error);
  }
};
