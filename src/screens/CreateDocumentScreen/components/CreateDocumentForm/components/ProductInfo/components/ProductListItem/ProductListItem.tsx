import React from "react";
import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import styles from "./styles";
import IMAGES from "../../../../../../../../assets/images";
import { Controller } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';
const ProductListItem = ({control, product, action, getValues}) => {

    const {name, netPrice, vat, quantity, uom} = product;

    const findProductIndexByUid = (uid) => {
        const products = getValues('products');
        return products.findIndex(product => product.uid === uid);
    };

    const generateOptions = () => {
        return Array.from({ length: 101 }, (_, i) => ({
            label: i.toString(),
            value: i.toString(),
        }));
    };

    const productIndex = findProductIndexByUid(product.uid);

    return (
        <View style={styles.productListItem}>

            <TouchableOpacity style={styles.remove} onPress={action}>
                <Image style={styles.icon} source={IMAGES.CLOSE} resizeMode="contain" />
            </TouchableOpacity>


            <View style={styles.box}>
                <View style={styles.conatinerItem}>
                    <View style={styles.itemName}>
                        <Text style={styles.labelName}>Nazwa</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.inputName}
                                    placeholder={"Nazwa"}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`products.[${productIndex}].name`}
                        />
                    </View> 
                   
                </View>

                <View style={styles.conatinerItem}>
                        <View style={styles.itemPrice}>
                        <Text style={styles.label}>Cena netto</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Cena netto"}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={(text) => {
                                        const normalizedText = text.replace(/,/g, '.');
                                        const regex = /^\d*\.?\d{0,2}$/;
                                        if (regex.test(normalizedText)) {
                                          onChange(text);
                                        }
                                      }}
                                    keyboardType="numeric"
                                    value={value}
                                />
                                )}
                                name={`products.[${productIndex}].netPrice`}
                        />
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.label}>VAT</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.input}>
                                <View style={styles.select}> 
                                <RNPickerSelect
                                placeholder={{
                                    label: 'Wybierz VAT',
                                    value: null,
                                    color: '#9EA0A4',
                                }}
                                onValueChange={onChange}
                                items={generateOptions()}
                                value={value}
                            />
                                </View>
                            </View>
                                )}
                                name={`products.[${productIndex}].vat`}
                        />
                    </View >
                    <View style={styles.item}>
                        <Text style={styles.label}>Ilość</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Ilość"}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        const normalizedText = text.replace(/,/g, '.');
                                        const regex = /^\d*\.?\d{0,2}$/;
                                        if (regex.test(normalizedText)) {
                                          onChange(text);
                                        }
                                      }}
                                    value={value}
                                />
                                )}
                                name={`products.[${productIndex}].quantity`}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>JM</Text>
                

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.input}>
                                    <View style={styles.select}> 
                                    <RNPickerSelect
                                    placeholder={{
                                        label: 'Wybierz jednostkę miary',
                                        value: null,
                                        color: '#9EA0A4',
                                    }}
                                    onValueChange={onChange}
                                    items={[
                                    { label: 'szt.', value: 'szt.' },
                                    { label: 'usł.', value: 'usł.' },
                                    ]}
                                    value={value}
                                />
                                    </View>
                                </View>

                                )}
                                name={`products.[${productIndex}].uom`}
                        />
                    </View>
                </View>

            </View>

        </View>
    );
};



export default ProductListItem;