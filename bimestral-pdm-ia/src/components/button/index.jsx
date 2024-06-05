import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style';

export default Button = ({onPress, estaCarregando}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={estaCarregando}>
        <Text style={styles.textButton}>
          {
            estaCarregando ? (
              <>Carregando...</>
            ) : (
              <>Verificar</>
            )
          }
        </Text>
    </TouchableOpacity>
  );
}



