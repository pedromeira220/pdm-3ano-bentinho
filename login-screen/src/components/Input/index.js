import { StyleSheet, Text, TextInput, View } from "react-native"
import { colors } from "../../../theme/colors";
import { useState } from "react";

export const Input = ({
  label,
  placeholder,
  secureTextEntry = false,
  style
}) => {

  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <View>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={[styles.input, {
          borderColor: isInputFocused ? colors.primary : colors.gray,
        }, style]}
          placeholder={placeholder}
          placeholderTextColor={colors.darkGray}
          onFocus={() => {
            setIsInputFocused(true)
          }}
          onBlur={() => {
            setIsInputFocused(false)
          }}
          secureTextEntry={secureTextEntry}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 14,
    color: colors.black
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    fontSize: 14,
    color: colors.black,
  }
});
