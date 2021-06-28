import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import pngFoto from './assets/img/perfil.png'
import myStylo from './css/style'

import Card from './components/Card'
import RedeSociais from './components/RedeSociais'

export default function App() {

  function handleRedeSocial(rs) {
    switch (rs) {
      case 'github':
        Linking.openURL('https://github.com/dududueedu')
        break
      case 'facebook':
        Linking.openURL('https://www.facebook.com/profile.php?id=100005503066960')
        break
      case 'linkedin':
        Linking.openURL('https://www.linkedin.com/in/dududueedu/')
        break
    }
  }

  return (
    <View style={myStylo.container}>
      <View style={myStylo.containerPerfil}>
        <Image style={myStylo.fotoPNG} source={pngFoto} />
        <Text style={myStylo.name}>Eduardo da Silva Gomes</Text>
        <Text style={myStylo.profissao}>Desenvolvedor Web e Mobile</Text>

        <RedeSociais />
      </View>

      <Card titulo="Experiências">
        <Text style={myStylo.cardText}>
          CONECTY - Provedor de Acesso a Internet & Telecom,
          Paracuru-CE (Ago 2017 – Dez 2017)</Text>
        <Text style={myStylo.cardText}>
          Semana Spring React, edição SDS 3.0</Text>
        <Text style={myStylo.cardText}>
          Bolsista do Programa de Acolhimento e Incentivo à
          Permanência (mai 2021 – atual)</Text>
      </Card>

      <Card titulo="Formação">
        <Text style={myStylo.cardText}>
          Ensino Médio e Curso Técnico de Informática, EEEP Flávio Gomes
              Granjeiro, Paraipaba-CE (2015 – 2017).</Text>
        <Text style={myStylo.cardText}>
          Bacharelado em Sistemas de Informação, UFC, Quixadá-CE (2018 – atual).</Text>
      </Card>
    </View>
  );
}