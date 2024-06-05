import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { styles } from './style';

export const ListItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textItem}>{item}</Text>
    </View>
  )
}
