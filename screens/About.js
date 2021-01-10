import * as React from 'react';
import { Image, View, StyleSheet, Text, Dimensions } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import {Header} from '../components/Header'

export function AboutScreen({ navigation }) {    
    return (
      <View style={styles.container}>
          <Header />    
          <Image style={styles.image} source={require('../assets/portrait.jpg')} />
          <View style={styles.blockquote}>            
            <Text style={styles.quotation}>
              Life isn't about finding yourself or finding anything, 
              life is about creating yourself and creating things                
            </Text>              
            <Text style={styles.footer}>— Bob Dylan</Text>        
          </View>        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
    }, 
    quotation: {
      fontSize:25,      
      color: 'gray',  
      textAlign: 'justify', 
      lineHeight: 30,         
    },   
    footer: {
      textAlign: 'right',
      color: 'gray',
      fontStyle: 'italic',
      fontSize:20,  
    }, 
    blockquote: {
      padding: 20,      
    },               
    image: {
      flex: 1,             
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,     
      width: Dimensions.get('window').width
 }
  });

// const AboutStack = createStackNavigator();

// export function AboutStackScreen() {
//   return (
//     <AboutStack.Navigator headerMode="none">
//       <AboutStack.Screen name="About" component={AboutScreen} />
//     </AboutStack.Navigator>
//   );
// }