import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ProductListItem from './components/ProductListItem/ProductListItem';
import { getAllProducts, removeProduct } from '../../database/productService';
import TemplateUI from '../../templates/TemplateUI/TemplateUI';

import styles from './styles';
import SearchBar from '../../components/SearchBar/SearchBar';

const ProductsListScreen = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [products, setProducts] = useState([]);
    const [searchData, setSearchData] = useState('');

    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };

    const handleRemoveProduct = async (id) => {
      await removeProduct(id);
      fetchProducts();
    };

    const handleEditProduct = async (id) => {
      navigation.navigate('EditProduct',{productId: id})
    };


    useEffect(() => {
      if (isFocused) {
        fetchProducts();
      }
    }, [isFocused]);

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchData.toLowerCase()));
    return (
        <TemplateUI>
          <View style={styles.container}>
            <SearchBar searchData={searchData} setSearchData={setSearchData}/>
            {filteredProducts.map(product => (
          <ProductListItem key={product.id} product={product} handleEditProduct={handleEditProduct}/>
        ))}
          </View>
        </TemplateUI>
    ); 
};


export default ProductsListScreen;