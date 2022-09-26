import { StyleSheet, Text, View } from 'react-native';
import HomePokemon from './src/pages/HomePokemon';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from './src/pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePokemon" component={HomePokemon} />
        <Stack.Screen name="Details" component={Details} /> 
      </Stack.Navigator>
    </NavigationContainer>
  </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
