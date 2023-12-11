import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import myStylo from './css/style'

import Card from './components/Card'
import RedeSociais from './components/RedeSociais'
import Perfil from './components/Perfil'

export default function App() {

  return (
    <ScrollView style={myStylo.container}>
      <View style={myStylo.containerPerfil}>
        <Perfil />
        <RedeSociais />
      </View>

      <Card titulo="Formação">
        <Text style={myStylo.cardText}>
          Ensino Médio Completo</Text>
        <Text style={myStylo.cardText}>
          Bacharelado em Sistemas de Informação</Text>
      </Card>

      <Card titulo="Cursos">
        <Text style={myStylo.cardText}>
          Curso Técnico de Informática: 3 anos
        </Text>
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
          Paracuru-CE</Text>
        <Text style={myStylo.cardText}>
          Bolsista PAIP (Programa de Acolhimento e Incentivo à
          Permanência) - UFC</Text>
        <Text style={myStylo.cardText}>
          Estagiário de desenvolvimento de software - UFC
        </Text>
      </Card>
      <Text style={myStylo.cardText}>© 2023 Copyright: Eduardo</Text>
    </ScrollView>
  );
}