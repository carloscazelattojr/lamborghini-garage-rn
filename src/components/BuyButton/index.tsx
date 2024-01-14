import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export function BuyButton() {

    function handleBuyCar() {
        Alert.alert("Lamborghini Garage", "Parabéns pela escolhada, você será direcionado consultor");
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleBuyCar}>
                <AntDesign
                    name="shoppingcart"
                    color="white"
                    style={styles.icon}
                    size={20}
                />
                <Text style={styles.text}>Buy This</Text>
            </TouchableOpacity>
        </View>
    );
}