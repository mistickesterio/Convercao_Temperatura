import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){

let [Temperatura, setValor] = useState();

function  CalcularTotal(){
    let resultado = parseFloat(Temperatura*9+160)/5;
    
    alert('O resultado é: ' + resultado);
}
    return(
        <View style={styles.fundo}>
            <Text style={styles.titulo}>Projeto Temperatura</Text>
            <TextInput  onChangeText={setValor} style={styles.campo} placeholder="Digite a temperatura"/>
            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Alterar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
fundo:{
    backgroundColor: '#DAA520',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
},


titulo:{
    fontSize:25,
    color:'#008000',
    fontWeight:'bold',
    marginBottom:40
},

campo:{
    backgroundColor: '#DCDCDC',
    fontSize:18,
    padding:8,
    marginTop:10,
    marginBottom:10,
    width:300,
    borderRadius: 7
},
botaoTexto:{
    color:'#FFF',
    fontSize:17,
    fontWeight:"700",
    
},
botao:{
    backgroundColor:"#BD2A2E",
    alignItems:'center',
    padding:15,
    borderRadius:20,
    width:250
}

});
