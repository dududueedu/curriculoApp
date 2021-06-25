import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import pngFoto from './assets/img/perfil.png'

import myStylo from './css/style'

export default function App() {
  return (
    <View style={myStylo.container}>
      <View style={myStylo.containerPerfil}>
        <Image style={myStylo.fotoPNG} source={pngFoto} />
        <Text style={myStylo.name}>Eduardo da Silva Gomes</Text>
        <Text style={myStylo.profissao}>Desenvolvedor Web e Mobile</Text>
        <View style={myStylo.redeSociais}>
          <AntDesign name="github" size={21} color="black" />
          <FontAwesome5 name="facebook" size={21} color="black" />
          <Entypo name="linkedin-with-circle" size={21} color="black" />
        </View>
      </View>
    </View>
  );
}