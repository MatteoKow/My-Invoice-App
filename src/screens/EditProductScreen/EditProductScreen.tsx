import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import EditProductForm from './components/EditProductForm/EditProductForm.tsx';
import { useRoute } from '@react-navigation/native';
import TemplateUI from '../../templates/TemplateUI/TemplateUI.tsx';

const EditProductScreen = () => {
  const route = useRoute();
  const { productId } = route.params;
  return (
    <TemplateUI>
        <EditProductForm productId={productId}/>
    </TemplateUI>
  )
} 

export default EditProductScreen;
