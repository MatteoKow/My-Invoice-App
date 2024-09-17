import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getInitials } from '../../../../utils/getInitials';

const CompanyListItem = ({company, handleEditCompany}) => {
    return (
        <TouchableOpacity style={styles.companyListItem} onPress={() => handleEditCompany(company.id)}>
        <View style={styles.circleContainer}>
            <View style={styles.circle}>
                <Text style={styles.circleText}>{getInitials(company.name) }</Text>
            </View>
        </View>
        <View style={styles.listBox}>
            <Text style={styles.name}>{company.name}</Text>
            <Text style={styles.nip}>{company.nip}</Text>
        </View>
    </TouchableOpacity>
    );
};

export default CompanyListItem;