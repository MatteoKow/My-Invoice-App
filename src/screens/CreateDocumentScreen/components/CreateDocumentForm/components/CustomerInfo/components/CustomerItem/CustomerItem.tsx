import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from "./styles";
import IMAGES from "../../../../../../../../assets/images";
import { Controller } from 'react-hook-form';

const CustomerItem = ({control, customer, removeCustomer, newCustomer}) => {
    return (
        <View style={styles.customerItem}>
            <TouchableOpacity style={styles.remove} onPress={removeCustomer}>
                <Image style={styles.icon} source={IMAGES.CLOSE} resizeMode="contain" />
            </TouchableOpacity>
   

            <View style={styles.row}>
                <Text style={styles.label}>Nazwa:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.name`}
                        />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>NIP:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.nip`}
                        />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Adres:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.address`}
                        />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Miasto:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.city`}
                        />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Kod pocztowy:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.code`}
                        />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.email`}
                        />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Telefon:</Text>
                <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Wprowadź..."}
                                    placeholderTextColor="#888888"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                )}
                                name={`customer.phone`}
                        />
            </View>          
        </View>
    );
};

export default CustomerItem;