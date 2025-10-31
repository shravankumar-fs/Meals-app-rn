import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealDetailMeta from '../components/MealDetailMeta';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
const MealDetailScreen = ({ route, navigation }) => {
  const mealID = route.params.mealID;
  const meal = MEALS.find((item) => item.id === mealID);
  useLayoutEffect(() => {
    if (!mealID || !meal) return;

    navigation.setOptions({
      title: meal.title,
    });
  }, [mealID, meal]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetailMeta meal={meal} textStyle={{ color: 'white' }} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'delius',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
