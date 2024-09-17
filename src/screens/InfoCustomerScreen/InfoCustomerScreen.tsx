import React, { useEffect, useState } from "react";
import TemplateUI from "../../templates/TemplateUI/TemplateUI";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { getCustomer, removeCustomer } from "../../database/customerService";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getInitials } from "../../utils/getInitials";

const InfoCustomerScreen = () => {
    const [customer, setCustomer] = useState([])
    const route = useRoute();
    const [initials, setInitials] = useState('')
    const navigation = useNavigation();
    
    const { customerId } = route.params;

    const getCustomerData = async () => {
        const customerData = await getCustomer(customerId);
        setInitials(getInitials(customerData.name))
        setCustomer(customerData)
    }
    const handleRemoveCustomer = async () => {
        await removeCustomer(customerId);
        navigation.goBack();
      };

    useEffect(()=>{getCustomerData()},[])
    return (
        <TemplateUI>
            <View style={styles.container}>

                <View style={styles.boxInfo}>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{initials}</Text>
                    </View>
                    <Text style={styles.name}>{customer.name}</Text>
                    <Text style={styles.nip}>{customer.nip}</Text>
                </View>

                <View style={styles.boxActions}>
                    <TouchableOpacity style={styles.editButton}  onPress={()=> navigation.navigate('EditCustomer',{customerId})} > 
                        <Text style={styles.textButton}>Edytuj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}  onPress={handleRemoveCustomer}> 
                        <Text style={styles.textButton}>Usuń</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxAddress}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Adres:</Text>
                            <Text style={styles.text}>{customer.address}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Miasto:</Text>
                            <Text style={styles.text}>{customer.city}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Kod pocztowy:</Text>
                            <Text style={styles.text}>{customer.code}</Text>
                        </View>      
                        <View style={styles.row}>
                            <Text style={styles.label}>Email:</Text>
                            <Text style={styles.text}>{customer.email}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Telefon:</Text>
                            <Text style={styles.text}>{customer.phone}</Text>
                        </View>
                </View>
            </View>
            
        </TemplateUI>
    );
};

export default InfoCustomerScreen;