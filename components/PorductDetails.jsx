// ProductDetailsScreen.js

import React from 'react';
import {View, Text, Image} from 'react-native';

const ProductDetailsScreen = ({route}) => {
  const {product} = route.params;

  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Image source={{uri: product.image}} style={{height: 200, width: 200}} />
      <Text style={{marginTop: 20, fontWeight: 'bold'}}>{product.title}</Text>
      <Text style={{color: 'red', padding: 30}}>{product.description}</Text>
      <Text
        style={{
          color: 'green',
          fontWeight: 'bolod',
          fontSize: 30,
          marginTop: 10,
        }}>
        {' '}
        ₹ {product.price}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;
