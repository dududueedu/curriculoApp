import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import pngFoto from './assets/img/perfil.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerPerfil}>
        <Image style={styles.fotoPNG} source={pngFoto} />
        <Text style={styles.name}>Eduardo da Silva Gomes</Text>
        <Text style={styles.profissao}>Desenvolvedor Web e Mobile</Text>
        <View style={styles.redeSociais}>
          <AntDesign name="github" size={21} color="black" />
          <FontAwesome5 name="facebook" size={21} color="black" />
          <Entypo name="linkedin-with-circle" size={21} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerPerfil: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoPNG: {
    height: 140,
    width: 140
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  profissao: {
    color: '#939393',
    marginBottom: 7
  }, 
  redeSociais: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly', 
    marginTop: 10 
  }
});
