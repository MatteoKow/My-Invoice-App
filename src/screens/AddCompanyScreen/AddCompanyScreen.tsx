import React, { useEffect, useState } from 'react';
import AddCompanyForm from './components/AddCompanyForm/AddCompanyForm';
import styles from './styles';
import TemplateUI from '../../templates/TemplateUI/TemplateUI';

const AddCompanyScreen = () => {

  return (
      <TemplateUI>
        <AddCompanyForm/>
      </TemplateUI>
  );
};


export default AddCompanyScreen;
