import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './Details'
import photos from '../data/drawings.js'
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const paddingElement = 5;
const paddingElementCount = 4;
const windowWidth = Dimensions.get('window').width - (paddingElement * paddingElementCount);
const numberElements = 2;
const widthElement = windowWidth / numberElements;
const heightElement = 170;

function DrawingsScreen({ navigation }) { 
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', {
          src: item.src,
          width: item.width,
          height: item.height
        })}>
        <Image style={styles.image} source={item.srcThumb}/>
      </TouchableOpacity>                                                                           
    </View>
  ); 

  const sort = (a, b) =>{    
    return b.order - a.order
  }

    return (
      <SafeAreaView style={styles.container}>
        <FlatGrid
            itemDimension={widthElement}        
            data={photos.sort(sort)}        
            style={{ flex: 1, padding: paddingElement }}
            spacing={0}
            renderItem={renderItem}
        />                    
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',  
      marginTop: 10, 
      width: widthElement, 
      height:heightElement,      
    },
    image: {
      width: widthElement, 
      height:heightElement,
      resizeMode: "cover",
    },
    });

const DrawingsStack = createStackNavigator();

export function DrawingsStackScreen() {
    return (
      <DrawingsStack.Navigator initialRouteName="Drawings">
        <DrawingsStack.Screen name="Drawings" component={DrawingsScreen} />
        <DrawingsStack.Screen name="Details" component={DetailsScreen} />
      </DrawingsStack.Navigator>
    );
  }