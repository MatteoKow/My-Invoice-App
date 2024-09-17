import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import IMAGES from "../../assets/images";

const SearchBar = ({searchData, setSearchData}) => {
    return (
        <View style={styles.searchBar} >
            <Image style={styles.icon} source={IMAGES.SEARCH} resizeMode="contain"/>
            <TextInput style={styles.input} value={searchData} onChangeText={setSearchData} placeholder="Szukaj" />
            {searchData ? <TouchableOpacity onPress={()=> setSearchData('')}>
                <Image style={styles.icon} source={IMAGES.CLOSE} resizeMode="contain"/>
            </TouchableOpacity> : null}
        </View>
    );
};

export default SearchBar;