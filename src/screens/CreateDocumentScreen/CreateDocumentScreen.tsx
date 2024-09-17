import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';



import CreateDocumentForm from './components/CreateDocumentForm/CreateDocumentForm';
import TemplateUI from '../../templates/TemplateUI/TemplateUI';

const CreateDocumentScreen = () => {

  return (
    <TemplateUI>
        <CreateDocumentForm/>
    </TemplateUI>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CreateDocumentScreen;
