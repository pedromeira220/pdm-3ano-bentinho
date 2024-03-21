import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors } from "../../../theme/colors";

export const Button = ({
  title,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 14,
    alignItems: "center",
    borderRadius: 8
  },
  title: {
    color: colors.white,
    fontWeight: "bold"
  }
});