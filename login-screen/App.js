import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './theme/colors';
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={{
        width: "100%"
      }}>
        <View style={{
          marginBottom: 16
        }}>
          <Text 
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
            color: colors.black
          }}

          >Seja bem-vindo!</Text>

          <Text style={{
            textAlign: "center",
            color: colors.black,
            marginTop: 8
          }}>Logue na sua conta</Text>
        </View>

        <View>
          <Input 
            label="Email"
            placeholder="Digite seu email"
            style={{
              marginBottom: 16
            }}
          />
          <Input 
            label="Senha"
            placeholder="Digite sua senha"
            secureTextEntry={true}
            style={{
              marginBottom: 16
            }}
          />

          <Button 
            title="Entrar"
          />
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
 
});
