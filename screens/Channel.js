import * as React from 'react';
import { Button, Text, View } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { DetailsScreen } from './Details'

export function ChannelScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Channel screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

// const ChannelStack = createStackNavigator();

// export function ChannelStackScreen() {
//   return (
//     <ChannelStack.Navigator headerMode="none">
//       <ChannelStack.Screen name="Human History Revisited" component={ChannelScreen} />
//       <ChannelStack.Screen name="Details" component={DetailsScreen} />
//     </ChannelStack.Navigator>
//   );
// }