import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    number: '30'
  },
  headers: {
    'X-RapidAPI-Key': '343d2f1ca1mshb6ab5c14bb49d02p1e8060jsn9cd5122231e2',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};


const Explore = ({navigation}: any) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.request(options)
  //     .then(response => {
  //       console.log(response.data.recipes)
  //       setRecipes(response.data.recipes); 
  //     })
  //     .catch(err => {
  //       Alert.alert('Error', err.message);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  const displayRecipe = (itemObject: any) => {
    const {index, item} = itemObject;

    return (
      
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Recipe', {
            item: item
          })}
        >
        <View
          style={{
            backgroundColor: index%2? '#F99B7D': '#8BACAA',
            height: 70,
            borderBottomWidth: 3,
            borderBottomColor: '#E76161',
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              // color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}
            >
            {item.title}
          </Text>
          {/* <Text
            style={{
              // color: 'white',
            }}>
            {item.instructions}
          </Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
   
    <View style={{flex: 1, justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1, backgroundColor: '#E76161'}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, color:'white'}}>
            Discover new recipes
          </Text>
          <FlatList data={recipes} renderItem={displayRecipe} />
        </View>
      )}
    </View>
    
  );
};

export default Explore;
