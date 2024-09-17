import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getInitials } from '../../../../utils/getInitials';

const CustomerListItem = ({customer, handleEditCustomer}) => {

    return (
        <TouchableOpacity style={styles.customerListItem} onPress={() => handleEditCustomer(customer.id)}>
            <View style={styles.circleContainer}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{getInitials(customer.name) }</Text>
                </View>
            </View>
            <View style={styles.listBox}>
                <Text style={styles.name}>{customer.name}</Text>
                <Text style={styles.nip}>{customer.nip}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomerListItem;