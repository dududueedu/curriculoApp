import React from 'react'
import { Text, Image } from 'react-native';

import myStylo from '../../css/style'
import pngFoto from '../../assets/img/perfil.png'

const Perfil = () => {
    return (
        <>
            <Image style={myStylo.fotoPNG} source={pngFoto} />
            <Text style={myStylo.name}>Eduardo da Silva Gomes</Text>
            <Text style={myStylo.profissao}>Desenvolvedor de Sistemas</Text>
        </>
    )
}

export default Perfil