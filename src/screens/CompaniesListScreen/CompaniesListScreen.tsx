import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,SectionList, Button, SafeAreaView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import styles from './styles.tsx';
import {getAllCompanies, removeCompany} from '../../database/companyService.js';

import CompanyListItem from './components/CompanyListItem/CompanyListItem.tsx';
import TemplateUI from '../../templates/TemplateUI/TemplateUI.tsx';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';


const CompaniesListScreen = () => {
      const [companies, setCompanies] = useState([]);
      const [searchData, setSearchData] = useState('');
      const isFocused = useIsFocused();

      const navigation = useNavigation();

      const fetchCustomers = async () => {
        const allCompanies = await getAllCompanies();
        setCompanies(allCompanies);
      };

      const handleRemoveCompany = async (id) => {
        await removeCompany(id);
        fetchCustomers();
      };

      const handleEditCompany = async (id) => {
        navigation.navigate('EditCompany',{companyId: id})
      };

      useEffect(() => {
        if (isFocused) {
          fetchCustomers();
        }
      }, [isFocused]);

      const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchData.toLowerCase())
      );

    // const companiesList = companies.map((company) => (<CompanyListItem key={company.id} company={company} handleRemoveCompany={handleRemoveCompany} handleEditCompany={handleEditCompany}/>))



  return (
      <TemplateUI>
             <View style={styles.container}>
        <SearchBar searchData={searchData} setSearchData={setSearchData}/>
        {filteredCompanies.map(company => (
          <CompanyListItem
            key={company.id}
            company={company}
            handleEditCompany={handleEditCompany}
          />
        ))}
      </View>
      </TemplateUI>
  )
} 

export default CompaniesListScreen;
