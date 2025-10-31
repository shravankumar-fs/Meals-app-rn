import { FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoriesGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderCategory = (itemData) => {
    const navigateHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={navigateHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
