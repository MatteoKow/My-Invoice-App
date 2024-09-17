import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProductListItem = ({product, handleEditProduct}) => {
    return (
        <TouchableOpacity style={styles.productListItem} onPress={() => handleEditProduct(product.id)}>
            <View style={styles.circleContainer}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{product.vat}%</Text>
                </View>
            </View>
            <View style={styles.listBox}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.netPrice} PLN</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductListItem; 