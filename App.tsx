import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  style={styles.image}source={require('./assets/Makt.png')} />

      <Text style={styles.text}>Marketspace</Text>
      <Text style={styles.text}>Seu espaço de compra e venda</Text>
      <Text style={styles.text}>Acesse sua conta</Text>
      <TextInput style={styles.Inputs} placeholder='email'></TextInput>
      <TextInput style={styles.Inputs} placeholder='Senha'></TextInput>
      <TouchableOpacity  style={styles.button}> Entrar</TouchableOpacity>
      <Text style={styles.text}>Ainda não tem uma conta?</Text>
      <TouchableOpacity  style={styles.button2}> Criar conta</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Inputs: {
    width: 250,
    height: 40,
    marginTop: 15,
    display:'flex',
    textAlign:'center',
    borderRadius:5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    Color:'#4B474D',
    justifyContent: 'center',
  },
  image: {
    width: 200,
     height: 200,
     resizeMode:'contain',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 40,
    marginTop: 15,
    display:'flex',
    textAlign:'center',
    color: 'white',
    borderRadius:5,
     resizeMode:'contain',
    justifyContent: 'center',
    backgroundColor: '#647AC6',
  },
  button2: {
    width: 250,
    height: 40,
    marginTop: 15,
    display:'flex',
    textAlign:'center',
    color: 'white',
    borderRadius:5,
    resizeMode:'contain',
   justifyContent: 'center',
   backgroundColor: '#D9D8DA',
 },
});
