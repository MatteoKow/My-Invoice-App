import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import EditCustomerForm from './components/EditCustomerForm/EditCustomerForm.tsx';
import { useRoute } from '@react-navigation/native';
import TemplateUI from '../../templates/TemplateUI/TemplateUI.tsx';

const EditCustomerScreen = () => {
  const route = useRoute();
  const { customerId } = route.params;
  return (
    <TemplateUI>
        <EditCustomerForm customerId={customerId}/>
    </TemplateUI>
  )
} 

export default EditCustomerScreen;
