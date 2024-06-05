import { Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './style';

export default Input = ({valorText, setValorText}) => {

  return (
    <TextInput
      style={styles.input}
      value={valorText}
      onChangeText={setValorText}
      placeholder="Digite aqui"
    />
  );
}



