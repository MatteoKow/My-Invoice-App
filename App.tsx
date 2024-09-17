import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddCompanyScreen from './src/screens/AddCompanyScreen/AddCompanyScreen';
import AddCustomerScreen from './src/screens/AddCustomerScreen/AddCustomerScreen';
import CreateDocumentScreen from './src/screens/CreateDocumentScreen/CreateDocumentScreen';
import CustomersListScreen from './src/screens/CustomersListScreen/CustomersListScreen';
import EditCustomerScreen from './src/screens/EditCustomerScreen/EditCustomerScreen';
import CompaniesListScreen from './src/screens/CompaniesListScreen/CompaniesListScreen';
import EditCompanyScreen from './src/screens/EditCompanyScreen/EditCompanyScreen';
import ProductsListScreen from './src/screens/ProductsListScreen/ProductsListScreen';
import AddProductScreen from './src/screens/AddProductScreen/AddProductScreen';
import EditProductScreen from './src/screens/EditProductScreen/EditProductScreen';
import IMAGES from './src/assets/images';
import InfoCustomerScreen from './src/screens/InfoCustomerScreen/InfoCustomerScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Customers = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: true, 
      cardStyle: { backgroundColor: 'black' },
      headerStyle: { 
        backgroundColor: 'black',
        borderBottomWidth: 0,
      },
      headerBackTitleVisible: false, 
      headerShadowVisible: false,
      headerTintColor: 'white'
      }}>
      <Stack.Screen name="CustomersList" component={CustomersListScreen} options={ ({navigation}) => ({
          title:"Klienci",headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddCustomer')}
              title="Dodaj"
              color="#ffff"
            />
          ),})}/>
      <Stack.Screen name="InfoCustomer" component={InfoCustomerScreen} options={{title:""}}/>
      <Stack.Screen name="AddCustomer" component={AddCustomerScreen} options={{title:"Dodaj klienta"}}/>
      <Stack.Screen name="EditCustomer" component={EditCustomerScreen} options={{title:"Edytuj"}}/> 
    </Stack.Navigator>
  );
}

const Companies = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: true, 
      cardStyle: { backgroundColor: 'black' },
      headerStyle: { 
        backgroundColor: 'black',
        borderBottomWidth: 0,
      },
      headerBackTitleVisible: false, 
      headerShadowVisible: false,
      headerTintColor: 'white'
      }}>
      <Stack.Screen name="CompaniesList" component={CompaniesListScreen} options={ ({navigation}) => ({
          title:"Działalności",headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddCompany')}
              title="Dodaj"
              color="#ffff"
            />
          ),})}/>
      <Stack.Screen name="AddCompany" component={AddCompanyScreen} options={ {title:"Dodaj działalność"}}/>
      <Stack.Screen name="EditCompany" component={EditCompanyScreen} options={{title:"Edytuj"}}/> 

    </Stack.Navigator>
  );
}

const Documents = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: true, 
      cardStyle: { backgroundColor: 'black' },
      headerStyle: { 
        backgroundColor: 'black',
        borderBottomWidth: 0,
      },
      headerBackTitleVisible: false, 
      headerShadowVisible: false,
      headerTintColor: 'white'
      }}>
      <Stack.Screen name="CreateDocument" component={CreateDocumentScreen} options={ {title:"Stwórz dokument"}}/>
    </Stack.Navigator>
  );
}

const Products = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: true, 
      cardStyle: { backgroundColor: 'black' },
      headerStyle: { 
        backgroundColor: 'black',
        borderBottomWidth: 0,
      },
      headerBackTitleVisible: false, 
      headerShadowVisible: false,
      headerTintColor: 'white'
      }}>
      <Stack.Screen name="ProductsList" component={ProductsListScreen} options={ ({navigation}) => ({
          title:"Produkty",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddProduct')}
              title="Dodaj"
              color="#ffff"
            />
          ),})} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} options={ {title:"Dodaj produkt"}}/>
      <Stack.Screen name="EditProduct" component={EditProductScreen} options={{title:"Edytuj"}}/> 

    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <View style={styles.safeArea}>
      
  <NavigationContainer >
 
  
 <Tab.Navigator 
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      height: 70,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      position: 'absolute',
      bottom: 20,
      marginHorizontal: 10,
      paddingBottom: 0,
      ...Platform.select({
        ios: {
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }),
    },
    tabBarLabelStyle: {
      fontSize: 12, 
      marginBottom: 5,
    },
    tabBarShowLabel: false,
  }}
>
     <Tab.Screen
  name="Działalności"
  component={Companies}
  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={IMAGES.COMPANIES}
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? 'black' : 'gray',
        }}
      />
    ),
  }}
/>
      <Tab.Screen name="Klienci" component={Customers} options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={IMAGES.CUSTOMERS}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? 'black' : 'gray',
        }}
      />
    ),
  }}/>
      <Tab.Screen name="Faktury" component={Documents}  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={IMAGES.DOCUMENTS}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? 'black' : 'gray',
        }}
      />
    ),
  }}/>
      <Tab.Screen name="Produkty" component={Products}  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={IMAGES.PRODUCTS}
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? 'black' : 'gray',
        }}
      />
    ),
  }}/>

    </Tab.Navigator>
  </NavigationContainer>
  </View>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black', // Kolor tła aplikacji
  },
});

export default App;
