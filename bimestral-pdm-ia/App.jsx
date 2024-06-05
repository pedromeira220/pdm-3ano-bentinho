import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/button';
import { heightTela } from './src/constants/dimensions';
import { StatusBar } from 'react-native';
import Input from './src/components/input';
import { ListItem } from './src/components/list-item';
import { toxicityClassifier, toxicityLabels } from './src/lib/tensorflow';

const mensagensDeAvisoDicionario = {
  "identity_attack": "Ataques à identidade ou grupos.",
  "insult": "Insultos ou ofensas pessoais.",
  "obscene": "Linguagem obscena ou vulgar.",
  "severe_toxicity": "Extremamente tóxico e prejudicial.",
  "sexual_explicit": "Expressões sexualmente explícitas.",
  "threat": "Ameaças ou incitação à violência.",
  "toxicity": "Conteúdo tóxico e ofensivo.",
};

export default function App() {
  
  // Estado para armazenar o valor do TextInput
  const [valorText, setValorText] = useState('');

  const [mensagemDeAviso, setMensagemDeAviso] = useState("Verifique a agressividade do seu texto")
  const [estaCarregando, setEstaCarregando] = useState(false)

  // Estado para armazenar a lista de itens
  const [items, setItems] = useState([]);
  // Função para adicionar um novo item à lista
  const adicionarItem = async () => {
    setEstaCarregando(true)
    console.log("> valorText", valorText);

    const predictions = await toxicityClassifier(valorText)
    const labelMaisProvavel = {
      label: null,
      probabilidade: 0
    }

    predictions.forEach(prediction => {
      if(prediction.label == "toxicity") {
        return
      }

      const probabilidadeDaPredictionSerVerdadeira = prediction.results[0].probabilities[1]

      if(probabilidadeDaPredictionSerVerdadeira > labelMaisProvavel.probabilidade) {
        labelMaisProvavel.label = prediction.label
        labelMaisProvavel.probabilidade = probabilidadeDaPredictionSerVerdadeira
      }

    })

    if(labelMaisProvavel.probabilidade > 0.01) {
      setMensagemDeAviso(mensagensDeAvisoDicionario[labelMaisProvavel.label])
    } else {
      setMensagemDeAviso("Você não foi tóxico :)")
    }

    


    // Verifica se o valor do TextInput não está vazio ou só contém espaços em branco
    if (valorText.trim() !== '') {

      console.log("> valorText", valorText);
      // Adiciona o valor do TextInput à lista de itens
      setItems([...items, valorText]);
      // Limpa o TextInput após adicionar o item
      setValorText(''); 
    }

    setEstaCarregando(false)
  };

  console.log("> items", items);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Lista de itens */}
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item}
         // Mensagem para lista vazia
        ListHeaderComponent={
          <View style={styles.listaVazia}>
            <Text style={styles.textoListaVazia}>{mensagemDeAviso}</Text>
           </View> 
        }
      />

      {/* Input e botão para adicionar novo item */}
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          valorText={valorText}
          setValorText={setValorText}
          placeholder="Digite aqui..."
        />
      </View>
      
      <Button onPress={adicionarItem} estaCarregando={estaCarregando}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1D0E2B',
    paddingTop: 128
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#280D3E',
    width: "100%",
    height: heightTela * 0.15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  listaVazia: {
  },
  textoListaVazia: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'Arial',
    fontWeight: "bold",
  },
});