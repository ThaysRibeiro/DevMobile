import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

var listaContatos = [
    {
        id:"1",
        nome: "Alex"
    },
    
    {
        id:"2",
        nome: "Leonardo"
    },
    
    {
        id:"3",
        nome: "João"
    }
]

export default function ListaContatos() {

    const renderItem = ({item}) => (
        <View style={{
            backgroundColor: "purple",
          padding: 20,
          borderRadius: 10,
          margin: 10
        }}>
           <Text>{item.nome}</Text>

        </View>
     


    );


  return (
    <View style={styles.container}>
      <Text>Meus Contatos</Text>
      
      <TextInput

            style={{
                borderWidth: 1,
                width: 200
            }}
       
      
      
      />


      
      <FlatList 
      style={{
          backgroundColor: "gray",
          width: "100%",
          margininTop: 10
      }}
      data={listaContatos}
      renderItem={renderItem}

      
      
      />

    

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
