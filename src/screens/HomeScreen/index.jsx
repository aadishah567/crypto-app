import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CoinItem from '../../Components/Coinitem';
import CoinItemcopy from '../../Components/Coinitem copy';
import CoinItemcopy2 from '../../Components/Coinitem copy 2';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
    return (
    <>
    <CoinItem/>
    <CoinItemcopy/>
    <CoinItemcopy2/>
    </>
    );
};

export default HomeScreen;