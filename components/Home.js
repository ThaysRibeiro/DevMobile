import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo!</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 20,
          borderRadius: 10
        }}
        onPress={() => navigation.navigate("Meus Contatos")}
        >
          <Text style={{color: "white"}}>Lista de Contatos</Text>


      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 20,
          borderRadius: 10,
          margin: 10
        }}
        onPress={() => navigation.navigate("Minhas Configurações")}
        >
          <Text style={{color: "white"}}>Configurações</Text>


      </TouchableOpacity>

      

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
});
