import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { getAllCompanies } from '../../../../../../database/companyService';

import styles from './styles';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';

const SellerInfo = ({ setValue, getValues, increaseStep }) => {
  const [selectedValue, setSelectedValue] = useState('null');
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      const allCompanies = await getAllCompanies();
      setCompanies(allCompanies);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleSellerSelect = (companyId) => {
    setSelectedValue(companyId);
    
    const selectedCompany = companies.find(company => company.id === companyId);
    if (selectedCompany) {
      const newSeller = {
        id: selectedCompany.id,
        name: selectedCompany.name,
        address: selectedCompany.address,
        city: selectedCompany.city,
        code: selectedCompany.code,
        nip: selectedCompany.nip,
        email: selectedCompany.email,
        phone: selectedCompany.phone,
        logo: selectedCompany.imagePath
      };

      setValue('seller', newSeller);
    }
  };

  const companiesList = companies.map((company) => (
    <Picker.Item key={company.id} label={company.name} value={company.id} />
  ));

  useEffect(() => {
    const initialize = async () => {
      await fetchCompanies();
      const initialValue = getValues('seller.id') || 'null';
      setSelectedValue(initialValue);
    };
    initialize();
  }, [getValues]);

  return (
    <View style={styles.sellerInfo}>
      <Text style={styles.title}>Dane sprzedawcy</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => handleSellerSelect(itemValue)}
      >
        <Picker.Item label="Wybierz działalność" value="null" />
        {companiesList}
      </Picker>
      <View style={styles.actionArea}>
         <CustomButton disabled={selectedValue !== 'null' ? false : true} onClick={increaseStep} text={"Dalej"} />
      </View>
    </View>
  );
};

export default SellerInfo;
