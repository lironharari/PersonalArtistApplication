import * as React from 'react';
import { Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export function TabBarIcon(routeName, focused, activeTintColor, inactiveTintColor, aboutIconInactive, aboutIconActive) {
    let color = focused ? activeTintColor : inactiveTintColor;    
    //let aboutIconStyle = focused ? styles.aboutIconActive : styles.aboutIconInactive;    
    let size = 24;
    
    switch(routeName) {
        case 'Home':
          return <FontAwesome5 name="home" size={size} color={color} />;
        case 'Channel':
          return <FontAwesome name="youtube" size={size} color={color} />;
        case 'Photography':
          return <FontAwesome5 name="camera" size={size} color={color} />;
        case 'Drawings':
          return <FontAwesome name="pencil" size={size} color={color} />;
        case 'Music':
          return <FontAwesome name="music" size={size} color={color} />;                                                
        case 'About':          
          return <Image style={[focused ? aboutIconActive : aboutIconInactive]} source={require('../assets/personalIcon.png')} />;
        default:
          return;
  }
}