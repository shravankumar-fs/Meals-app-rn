import { View, Text, StyleSheet } from 'react-native';

const MealDetailMeta = (props) => {
  const { meal, textStyle = {} } = props;
  return (
    <View style={styles.details}>
      <Text style={[styles.description, textStyle]}>
        {meal.duration} mins ✨
      </Text>
      <Text style={[styles.description, textStyle]}> {meal.complexity} ✨</Text>
      <Text style={[styles.description, textStyle]}>{meal.affordability}</Text>
    </View>
  );
};

export default MealDetailMeta;

const styles = StyleSheet.create({
  description: {
    fontFamily: 'delius',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#132832',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    gap: 10,
  },
});
