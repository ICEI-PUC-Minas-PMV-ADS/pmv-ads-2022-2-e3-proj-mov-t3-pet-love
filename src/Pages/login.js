import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Login = () => {

  clicou = () => {

      
  }
 
  return (

    <View style={styles.container}> 

        <Image
          source={require('../img/Parenaboalogo.png')}
          style={styles.logo}
        />
      <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
      />

       <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
      />

      <TouchableOpacity
       style={styles.botao}
       onPress={ () => {this.clicou} }
      >

        <Text style={styles.botaoText}> Login </Text>

      </TouchableOpacity>

    </View>
    
  );

}



export default Login;


const styles = StyleSheet.create({
  container:
  {
    Flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#055555'
  },
  logo:
  {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  input:
  {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor:  '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao:
  {
    width: 300,
    height: 42,
    backgroundColor: '#B2B2B2',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText:
  {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#055555'

  },
})