import React from 'react';
import { Text, View } from 'react-native';

import myStylo from '../../css/style'

const Card = ({ titulo, children }) => {
    return (
        <View style={myStylo.cardContainer}>
            <View style={myStylo.card}>
                <View>
                    <Text>{titulo}</Text>
                </View>
                <View>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Card