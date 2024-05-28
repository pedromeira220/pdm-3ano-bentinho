import { StyleSheet } from 'react-native';
import { heightTela, widthTela } from './dimensions'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#240046',
    paddingTop: 64
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#10002b',
    width: widthTela,
    height: heightTela * 0.33,
    borderRadius: 44,
    padding: 24,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30, 
    marginRight: 10, 
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Arial',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 0.5,
    padding: 10,
    marginTop: 20,
    width: '100%',
    fontFamily: 'Arial',
    fontSize: 19,
    color: '#fff',
    alignSelf: 'left',
  },
  button: {
    backgroundColor: '#c1121f',
    paddingHorizontal: 64,
    paddingVertical: 16,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#c0c0c0',
    fontSize: 17,
    fontFamily: "Arial",
    fontWeight: "bold"
  },
  listaVazia: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoListaVazia: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Arial',
  },
  emoji: {
    width: 80,
    height: 80,
    borderRadius: 30, 
    marginRight: 10, 
    marginTop: 150,
  },
});