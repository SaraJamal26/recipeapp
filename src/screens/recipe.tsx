import React from 'react';
import {ScrollView, Text, View, Image } from 'react-native';


const Recipe = ({ route }: any) => {
  const { item } = route.params;
  // const source = {
  //   html: item.instructions
  // };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          {item.title}
        </Text>
        <Image source={{ uri: item.image }} style={{ width: '85%', height: '30%', marginVertical: 10 }} />
        <Text
            style={{
              // color: 'white',
            }}>
                {item.instructions}
                
          </Text>
       
      </View>
    </ScrollView>
  );
};

export default Recipe;
