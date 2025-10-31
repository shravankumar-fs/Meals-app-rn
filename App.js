import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    delius: require('./assets/fonts/Delius-Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  const Stack = createNativeStackNavigator();
  return (
    <>
      <GestureHandlerRootView>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle: {
                backgroundColor: '#083c5d',
              },
              headerTintColor: '#ffbb39',
              headerTitleStyle: {
                fontFamily: 'delius',
                fontSize: 22,
                fontWeight: '500',
              },
              headerBackTitleStyle: {
                fontFamily: 'delius',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffbb39',
              },
              contentStyle: {
                backgroundColor: '#1d2731',
              },
            }}
          >
            <Stack.Screen
              name='MealsCategories'
              options={{
                title: 'All Categories',
              }}
              component={CategoriesScreen}
            />
            <Stack.Screen
              name='MealsOverview'
              options={{
                title: 'Category Overview',
              }}
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              options={{
                title: 'Meal Details',
              }}
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {},
});
