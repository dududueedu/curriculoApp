import React from 'react';
import { Text, View } from 'react-native';

import myStylo from './css/style'

import Card from './components/Card'
import RedeSociais from './components/RedeSociais'
import Perfil from './components/Perfil'

export default function App() {

  return (
    <View style={myStylo.container}>
      <View style={myStylo.containerPerfil}>
        <Perfil />
        <RedeSociais />
      </View>

      <Card titulo="Formação">
        <Text style={myStylo.cardText}>
          Ensino Médio e Curso Técnico de Informática, EEEP Flávio Gomes
              Granjeiro, Paraipaba-CE (2015 – 2017).</Text>
        <Text style={myStylo.cardText}>
          Bacharelado em Sistemas de Informação, UFC, Quixadá-CE (2018 – 2023).</Text>
      </Card>

      <Card titulo="Cursos">
        <Text style={myStylo.cardText}>
          Testes Automatizados (TDD + BDD): 40H</Text>
        <Text style={myStylo.cardText}>
          Inovando Com CSS: 26H</Text>
        <Text style={myStylo.cardText}>
          Implementando Banco de Dados: 15H</Text>
      </Card>

      <Card titulo="Experiências">
        <Text style={myStylo.cardText}>
          Instalador de Telecomunicações - CONECTY,
          Paracuru-CE (Ago 2017 – Dez 2017)</Text>
        <Text style={myStylo.cardText}>
          Bolsista do PAIP - Programa de Acolhimento e Incentivo à
          Permanência - UFC (mai 2021 – fev 2022)</Text>
        <Text style={myStylo.cardText}>
          Estagiário de desenvolvimento de software - UFC
            (mai 2021 – fev 2022)
        </Text>
      </Card>
    </View>
  );
}