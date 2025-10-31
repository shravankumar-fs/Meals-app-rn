import { View, Text, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

const MealsOverviewScreen = (props) => {
  const { navigation, route } = props;

  const categoryID = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryID) >= 0;
  });

  const renderMealItem = (itemData, i) => {
    return (
      <MealItem
        meal={itemData.item}
        onPress={() => {
          setTimeout(
            () =>
              navigation.navigate('MealDetail', {
                mealID: itemData.item.id,
              }),
            300
          );
        }}
      />
    );
  };

  useLayoutEffect(() => {
    if (!categoryID) return;
    const categoryName = CATEGORIES.find(
      (item) => item.id === categoryID
    ).title;

    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryID]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
