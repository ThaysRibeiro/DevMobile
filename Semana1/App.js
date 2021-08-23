import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
import ListaContatos from './components/Lista.js';
import Config from './components/Config.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Bem Vindo!" component={Home} />
      <Stack.Screen name="Meus Contatos" component={ListaContatos} />
      <Stack.Screen name="Minhas Configurações" component={Config} />
      
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


