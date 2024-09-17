import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import EditCompanyForm from './components/EditCompanyForm/EditCompanyForm.tsx';
import Header from '../../components/Header/Header.tsx';
import { useRoute } from '@react-navigation/native';
import TemplateUI from '../../templates/TemplateUI/TemplateUI.tsx';

const EditCompanyScreen = () => {
  const route = useRoute();
  const { companyId } = route.params;
  return (
    <TemplateUI>
      <EditCompanyForm companyId={companyId}/>
    </TemplateUI>

  );
} ;

export default EditCompanyScreen;
