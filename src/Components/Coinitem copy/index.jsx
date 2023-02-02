import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import CoinDetailScreencopy from '../../screens/CoinDetailScreen copy';
import styles from './styles';


const CoinItemcopy = () => {


        const navigation= useNavigation();

        const percentageColor = 1.27 <0 ? '#ea3943' : '#16c784'

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
        <Pressable style={styles.coinContainer} onPress={()=> navigation.navigate('CoinDetailScreenCopy', {coinId: 'uranate'})}>
            <Image source={{uri:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"  }}

                style={styles.row}
            />
            <View>
                <Text style={styles.title}>uranate</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>2</Text>
                    </View>
                    <Text style={styles.text}>URN</Text>
                    <AntDesign
                     name={1.3 < 0 ? 'caretdown' : 'caretup'} 
                     size={12} 
                     color={percentageColor}
                      style={styles.cartdownlogo}
                     />
                    <Text style={{color: percentageColor}}>1.48%</Text>
                </View>
            </View>
            <View style={{ marginLeft: 'auto',alignItems:'flex-end' }}>
                <Text style={styles.title}>1350</Text>
                <Text style={{color:'white'}}>Mcap {beautifyMarketCap(3)}T</Text>
            </View>
        </Pressable>
    );

}

export default CoinItemcopy;