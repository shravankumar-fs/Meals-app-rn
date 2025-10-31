import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import MealDetailMeta from './MealDetailMeta';

const MealItem = (props) => {
  const { meal, onPress } = props;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : [styles.button]
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title} 😋</Text>
          </View>
          <MealDetailMeta meal={meal} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 0 },
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'delius',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#132832',
    margin: 8,
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    opacity: 0.5,
  },
});
