import React , {useState} from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DetailsScreen } from './Details'
import { createStackNavigator } from '@react-navigation/stack';
import photos from '../data/photography.js'
import { FlatGrid } from 'react-native-super-grid';

const paddingElement = 5;
const paddingElementCount = 4;
const windowWidth = Dimensions.get('window').width - (paddingElement * paddingElementCount);
const numberElements = 2;
const widthElement = windowWidth / numberElements;
const heightElement = 170;


function PhotographyScreen({ route,navigation }) {   
  const [category,setCategory] = useState('all');  

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

  const filter = (photo) =>{  
    if (category ===  'all' || category === null || category === '')
      return photo;
    else
      return photo.category === category
  }

  const sort = (a, b) =>{    
    return b.order - a.order
  }

    return (
      <SafeAreaView style={styles.container}>
        <DropDownPicker
            items={[
                {label: 'All Photos', value: 'all'},
                {label: 'It\'s more fun in Manila', value: 'manila'},
                {label: 'Life on the railroads', value: 'india'},
                {label: 'Street Photography', value: 'street'},
                {label: 'Kids', value: 'kids'},
                {label: 'Animals', value: 'animals'},
            ]}
            placeholder="Select a project"
            dropDownMaxHeight={300}
            defaultValue={category}
            containerStyle={{height: 50,marginBottom:0}}
            style={{backgroundColor: '#ffff'}}
            selectedLabelStyle={{color: '#000000', fontSize:16}}
            activeItemStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}}
            itemStyle={{ justifyContent: 'flex-start', paddingLeft:10, height: 40 }}
            dropDownStyle={{backgroundColor: '#ffff'}}
            onChangeItem={item => setCategory(item.value)}
        />        
        <FlatGrid
            itemDimension={widthElement}        
            data={photos.filter(filter).sort(sort)}        
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

export const PhotographyStack = createStackNavigator();

export function PhotographyStackScreen() {
  return (
    <PhotographyStack.Navigator initialRouteName="Photography">
      <PhotographyStack.Screen name="Photography" component={PhotographyScreen} />
      <PhotographyStack.Screen name="Details" component={DetailsScreen} />
    </PhotographyStack.Navigator>
  );
}