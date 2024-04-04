// ProductDetailsScreen.js

import React from 'react';
import {View, Text, Image} from 'react-native';

const ProductDetailsScreen = ({route}) => {
  const {product} = route.params;

  return (
    <View>
      <Image source={{uri: product.image}} style={{height: 200, width: 200}} />
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
