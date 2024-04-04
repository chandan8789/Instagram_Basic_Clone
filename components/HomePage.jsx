import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const navigateToNextPage = item => {
    navigation.navigate('Products', {product: item});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : (
        <>
          <Text style={styles.heading}>Instagram Users</Text>
          <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.productContainer}>
                  <Image source={{uri: item.image}} style={styles.image} />
                  <View>
                    <Text onPress={(text)=>navigateToNextPage(text)} style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 20,
  },
  loader: {
    marginBottom: 50,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  price: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});
