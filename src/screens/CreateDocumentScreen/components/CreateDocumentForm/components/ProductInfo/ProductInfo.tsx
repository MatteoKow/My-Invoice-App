import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from './styles';
import { getAllProducts } from '../../../../../../database/productService';
import ProductListItem from './components/ProductListItem/ProductListItem';
import { UIDGenerator } from '../../../../../../utils/UIDGenerator';
import CustomButton from '../../../../../../components/CustomButton/CustomButton';
import IMAGES from '../../../../../../assets/images';

const ProductInfo = ({control, setValue, getValues,increaseStep, decreaseStep}) => {
    const [products, setProducts] = useState({});
    const [localProducts, setLocalProducts] = useState([]);

    const fetchProducts = async () => {
        const allProducts = await getAllProducts();
        const transformedData = allProducts.map(product => ({
            key: product.id,
            value: product.name,
            details: product 
        }));

        setProducts(transformedData);

      };

      const handleProductSelect = (key) => {
        const selectedProduct = products.find(product => product.key === key);
        if (selectedProduct) {
            const details = selectedProduct.details;
            const products = getValues('products');
            const newProduct = {
                uid: UIDGenerator(),
                id: details.id,
                name: details.name,
                netPrice: details.netPrice,
                vat: details.vat,
                quantity: details.quantity,
                uom: details.uom,
            }
            setValue('products', [...products, newProduct]);
            setLocalProducts([...products, newProduct]);
        }  
    };

    const addCustomProduct = () => {
        const products = getValues('products');
        const newProduct = {
            uid: UIDGenerator(),
            name: "",
            netPrice: "0",
            vat: "23",
            quantity: "1",
            uom: "szt."
        }
        setValue('products', [...products, newProduct])
        setLocalProducts([...products, newProduct]);
    }

    const handleRemoveProduct = (uid) => {
        const updatedProducts = localProducts.filter((product) => product.uid !== uid);
        setValue('products', updatedProducts);
        setLocalProducts(updatedProducts);
    }


    useEffect(() => {
        fetchProducts();
        setLocalProducts(getValues('products'));
    }, []);

      const productsList = localProducts.map((product, index) => (
        <ProductListItem key={product.uid} control={control} product={product} action={()=> handleRemoveProduct(product.uid)} getValues={getValues} />
    ))

    return (
        <View style={styles.productInfo}>
            <Text style={styles.title}>Produkty</Text>
            <View style={styles.row}>
                <SelectList
                setSelected={(key) => {
                    handleProductSelect(key);
                }}
                data={products}
                save="key"
                placeholder="Wybierz..."
                boxStyles={styles.box}
                dropdownStyles={styles.dropdown}
                />
                    <TouchableOpacity style={styles.add} onPress={addCustomProduct}>
                        <Image style={styles.icon} source={IMAGES.ADD} resizeMode="contain" />
                    </TouchableOpacity>
            </View>
            {productsList}

            <View style={styles.buttonArea}>
                <CustomButton onClick={decreaseStep} text={"Cofinj"}/>
                <CustomButton disabled={Object.keys(localProducts).length > 0 ? false : true} onClick={increaseStep} text={"Dalej"} />
            </View>
        </View>
    );
};


export default ProductInfo;