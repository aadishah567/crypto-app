import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';


const CoinItem = () => {


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
        <Pressable style={styles.coinContainer} onPress={()=> navigation.navigate("CoinDetailedScreen", {coinId: 'stealer'})}>
            <Image source={{uri:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"  }}

                style={styles.row}
            />
            <View>
                <Text style={styles.title}>stealer</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>1</Text>
                    </View>
                    <Text style={styles.text}>STR</Text>
                    <AntDesign
                     name={1.45 < 0 ? 'caretdown' : 'caretup'} 
                     size={12} 
                     color={percentageColor}
                      style={styles.cartdownlogo}
                     />
                    <Text style={{color: percentageColor}}>1.78%</Text>
                </View>
            </View>
            <View style={{ marginLeft: 'auto',alignItems:'flex-end' }}>
                <Text style={styles.title}>1500</Text>
                <Text style={{color:'white'}}>Mcap {beautifyMarketCap(1)}T</Text>
            </View>
        </Pressable>
    );

}

export default CoinItem;