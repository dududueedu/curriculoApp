import React from 'react'
import { Text, Image } from 'react-native';

import myStylo from '../../css/style'
import pngFoto from '../../assets/img/perfil.png'

const Perfil = () => {
    return (
        <>
            <Image style={myStylo.fotoPNG} source={pngFoto} />
            <Text style={myStylo.name}>Eduardo da Silva Gomes</Text>
            <Text style={myStylo.profissao}>Desenvolvedor Web e Mobile</Text>
        </>
    )
}

export default Perfil