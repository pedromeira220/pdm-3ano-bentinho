import { StyleSheet } from "react-native";
import { heightTela, widthTela } from "../../constants/dimensions";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 40,
    alignSelf: 'center',
    alignItems: 'center',
    width: "100%"
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: 'bold',
  },
})