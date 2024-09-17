import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../../components/Header/Header";
import styles from "./styles";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import TemplateUI from "../../templates/TemplateUI/TemplateUI";

const AddProductScreen = () => {
    return (
        <TemplateUI>
            <AddProductForm/>
        </TemplateUI>
    );
};


export default AddProductScreen;