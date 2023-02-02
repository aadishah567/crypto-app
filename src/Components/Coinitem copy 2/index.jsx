import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';


const CoinItemcopy2 = () => {


        const navigation= useNavigation();

        const percentageColor = 1.47 <0 ? '#ea3943' : '#16c784'

        const beautifyMarketCap = (marketCap) =>{
            if (marketCap >1_000_000_000_000){
                return Math.floor(marketCap/1_000_000_000_000)
            }if(marketCap > 1_000_000_000){
                return Math.floor(marketCap/1_000_000_000)
            }if(marketCap > 1_000_000_000){
                return Math.floor(marketCap/1_000_000_000)
            }
            return marketCap;
        };
    return (
        <Pressable style={styles.coinContainer} onPress={()=> navigation.navigate("CoinDetailedScreencopy2", {coinId: 'stealer'})}>
            <Image source={{uri:"https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"  }}

                style={styles.row}
            />
            <View>
                <Text style={styles.title}>flipcoin</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>3</Text>
                    </View>
                    <Text style={styles.text}>FLP</Text>
                    <AntDesign
                     name={1.45 < 0 ? 'caretdown' : 'caretup'} 
                     size={12} 
                     color={percentageColor}
                      style={styles.cartdownlogo}
                     />
                    <Text style={{color: percentageColor}}>3.23%</Text>
                </View>
            </View>
            <View style={{ marginLeft: 'auto',alignItems:'flex-end' }}>
                <Text style={styles.title}>1456</Text>
                <Text style={{color:'white'}}>Mcap {beautifyMarketCap(4.5)}T</Text>
            </View>
        </Pressable>
    );

}

export default CoinItemcopy2;