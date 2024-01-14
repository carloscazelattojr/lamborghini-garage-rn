import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View } from 'react-native';

import { BuyButton } from '../BuyButton';
import { Divider } from '../Divider';

import { CAR_ASSET_BASE_URL } from '../../constants/car';

import Logo from '../../../assets/lamborghini-logo.png';
import { styles } from './styles';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export function CardView() {

    const [carData, setCarData] = useState<CarModel | null>(null);

    const renderLogoBox = () => (
        <View style={styles.imageContainer}>
            <Image source={Logo} style={styles.imageLogo} />
        </View>
    );

    const renderCarDetails = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand} >Lamborghini - {carData?.id}</Text>
            <Text style={styles.carName} >{carData?.carName}</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image
            style={styles.image}
            source={{ uri: `${CAR_ASSET_BASE_URL}${carData?.id}.png` }}
            resizeMode="contain"
        />
    );

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color={'#01A6b3'} onPress={() => handlePreviousItem(carData, setCarData)} />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title='>' color={'#01A6b3'} onPress={() => handleNextItem(carData, setCarData)} />
        </View>
    );

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);
            console.log(carData);
        })();
    }, []);

    return (
        <View style={styles.container}>
            {renderLogoBox()}
            <Divider />
            {renderCarDetails()}
            {renderCarImage()}
            <Divider />
            <BuyButton />
            {renderPriceControls()}
        </View>
    );
}



