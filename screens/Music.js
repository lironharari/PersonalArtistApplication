import * as React from 'react';
import { Button, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { DetailsScreen } from './Details'

export function MusicScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Music screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

// const MusicStack = createStackNavigator();

// export function MusicStackScreen() {
//     return (
//       <MusicStack.Navigator headerMode="none">
//         <MusicStack.Screen name="Music" component={MusicScreen} />
//         <MusicStack.Screen name="Details" component={DetailsScreen} />
//       </MusicStack.Navigator>
//     );
//   }