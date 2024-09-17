import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import AddCustomerForm from './components/AddCustomerForm/AddCustomerForm';
import styles from './styles';
import TemplateUI from '../../templates/TemplateUI/TemplateUI';

const AddCustomerScreen = () => {
  return (
    <TemplateUI>
          <AddCustomerForm/>
    </TemplateUI>

  )
} 

export default AddCustomerScreen;
