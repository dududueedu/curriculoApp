import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import pngFoto from './assets/img/perfil.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerPerfil}>
        <Image style={styles.fotoPNG} source={pngFoto} />
        <Text style={styles.name}>Eduardo da Silva Gomes</Text>
        <Text style={styles.profissao}>Desenvolvedor Web e Mobile</Text>
          <View>
            <Text>GitHub</Text>
            <Text>Instagram</Text>
            <Text>LinkedIn</Text>
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
  }
});
