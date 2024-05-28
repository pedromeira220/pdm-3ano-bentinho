import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const widthTela = width;
const heightTela = height;

const ListItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.user}>
        <Image source={require('../assets/bagre.jpeg')} style={styles.icon} />
        <Text style={styles.username}>@bagre</Text>
      </View>
      <Text style={styles.textItem}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#10002b',
    paddingHorizontal: 10,
    width: widthTela * 0.9,
    height: heightTela * 0.2,
    borderRadius: 25,
    marginVertical: 5, 
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30, 
    marginRight: 10, 
    marginTop: 20,
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Arial',
    alignItems: 'center',
    marginTop: 20,
  },
  textItem: {
    color: '#c0c0c0',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ListItem;
