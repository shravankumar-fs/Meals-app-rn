import { Pressable, StyleSheet, View, Text, Platform } from 'react-native';

const CategoryGridTile = (props) => {
  const { title, color, onPress } = props;
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : [styles.button]
        }
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: '#eeeeee50',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'delius',
    fontWeight: '500',
    fontSize: 18,
    color: '#132832',
  },
});

export default CategoryGridTile;
