import { StyleSheet } from "react-native";
import { heightTela, widthTela } from "../../constants/dimensions";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 25,
    marginVertical: 5, 
  },
  textItem: {
    color: '#c0c0c0',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
})