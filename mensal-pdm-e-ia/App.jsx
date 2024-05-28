import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, StyleSheet, SafeAreaView} from 'react-native';
import ListItem from './src/components/ListItem' 
import styles from './src/constants/styles'
import { verSeEhMilitante } from './src/lib/toxicity';


const FlatListComponent = () => {
  // Estado para armazenar a mensagem exibida ao clicar em um item
  const [isLoading, setIsLoading] = useState(false)

  // Estado para armazenar o valor do TextInput
  const [valorText, setValorText] = useState('');

  // Estado para armazenar a lista de itens
  const [items, setItems] = useState([]);
  const [textIsToxic, setTextIsToxic] = useState(false)

  // Função para adicionar um novo item à lista
  const adiconarItem = async () => {

    setIsLoading(true)
    // Verifica se o valor do TextInput não está vazio ou só contém espaços em branco
    if (valorText.trim() !== '') {
      // Adiciona o valor do TextInput à lista de itens

      const {predictions} = await verSeEhMilitante(valorText)

      console.log(predictions);

      let textIsToxicVar = false

      predictions.map(prediction => {
        const match = prediction.results[0].match

        console.log(prediction.label, match);

        if(match == true) {
          textIsToxicVar = true
        }

      })

      console.log("> textIsToxicVar", textIsToxicVar);

      if(textIsToxicVar) {
        setTextIsToxic(textIsToxicVar)
        setIsLoading(false)
        return
      }

      setItems([...items, valorText]);
      // Limpa o TextInput após adicionar o item
      setValorText(''); 
      setIsLoading(false)
    }
  };

  if(textIsToxic) {
    return (
      <SafeAreaView style={estilos.container}>
      <View style={estilos.quadradoUsuario}>
        <View style={estilos.infoUsuario}>
          <Image source={require('./src/assets/bagre.jpeg')} style={estilos.iconeUsuario} />
          <Text style={estilos.textoUsuario}>@bagre</Text>
        </View>
        <Text style={estilos.textoAdicional}>You were banned</Text>
        <Text style={[estilos.textoAdicional, estilos.textoEspacado, estilos.textoVermelho]}>
          "{valorText}"
        </Text>
      </View>
    </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      {/* Lista de itens */}
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(index) => index.toString()}
         // Mensagem para lista vazia
        ListEmptyComponent={
          <View style={styles.listaVazia}>
            <Image source={require('./src/assets/emoji.png')} style={styles.emoji} />
            <Text style={styles.textoListaVazia}> Nothing here yet </Text>
           </View> 
        }
      />

      {/* Input e botão para adicionar novo item */}
      <View style={styles.inputContainer}>
        <View style={styles.user}>
          <Image source={require('./src/assets/bagre.jpeg')} style={styles.icon} />
          <Text style={styles.username}>@bagre</Text>
        </View>
        <TextInput
          style={styles.input}
          value={valorText}
          onChangeText={setValorText}
          placeholder="Make your post"
          placeholderTextColor={"#b98ebf"}
        />
        <TouchableOpacity style={styles.button} onPress={adiconarItem}>
          <Text style={styles.textButton}>
            {
              isLoading ? (
                <>Loading...</>
              ) : (
                <>publish</>
              )
            }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#240046', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadradoUsuario: {
    width: '80%',
    height: 220, 
    backgroundColor: '#10002b', 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    padding: 24,
  },
  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  iconeUsuario: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    marginRight: 10, 
  },
  textoUsuario: {
    fontSize: 18,
    color: 'white',
  },
  textoAdicional: {
    fontSize: 18,
    color: 'white',
    marginTop: 10, 
  },
  textoEspacado: {
    marginTop: 60, 
  },
  textoVermelho: {
    fontSize: 20,
    color: '#c1121f', 
  },
});

export default FlatListComponent;
