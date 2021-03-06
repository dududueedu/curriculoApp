import React from 'react'
import { View, TouchableOpacity, Linking } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import myStylo from '../../css/style'

const RedeSociais = () => {

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
        <View style={myStylo.redeSociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <AntDesign name="github" size={21} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                <FontAwesome5 name="facebook" size={21} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Entypo name="linkedin-with-circle" size={21} color="black" /></TouchableOpacity>
        </View>
    )
}

export default RedeSociais