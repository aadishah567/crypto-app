import React ,{useState}from 'react';
import { View, Text, Dimensions , StyleSheet, TextInput} from 'react-native';
import { Ionicons ,EvilIcons} from '@expo/vector-icons';
import CoinDetailedHeadercopy from '../CoinDetailScreen/components/CoinDetailedHeader';
import Coin1 from '../../../assets/data/crypto copy.json'
import styles from './styles';

import { useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';

import { useNavigation } from '@react-navigation/native';
import CoinDetailedHeadercopy2 from '../CoinDetailScreen copy 2/components/CoinDetailedHeader';

const CoinDetailScreencopy= () => {
    const {
         image: { small },
         name,
         symbol,
         prices,
        market_data: { 
            market_cap_rank ,
            current_price,
            price_change_percentage_24h,
            } ,
        } = Coin1;

        const [coinValue, setCoinValue] = useState(1)
        const [usdValue, setUsdValue] = useState(current_price.usd)

        const route = useRoute();

        const{params:{ coinId}}= route;


        const percentageColor = price_change_percentage_24h <0 ? '#ea3943' : '#16c784';

        const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";

        const screenWIdth = Dimensions.get('window').width;

        const formatCurrency=(value)=>{
            "worklet";
            if(value ===""){
            return`$${current_price.usd.toFixed(2)}`
            }
            return`$${parseFloat(value).toFixed(2)}`
        }

    return (
        <View style={{paddingHorizontal:10}}>
        <ChartPathProvider data={{ points: prices.map(([x, y]) =>({x,y})),
         smoothingStrategy: 'bezier' ,
         }}
         >
       <CoinDetailedHeadercopy 
       image={'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'}
        name={name} 
        symbol={symbol} 
        marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
            <View>
         <Text style={styles.name}>{name}</Text>
         <ChartYLabel
         format={formatCurrency}
         style={styles.currentPrice}
         />
        {/* <Text style={styles.currentPrice}>${current_price.usd}</Text>*/}
        </View>
        <View style={{backgroundColor:percentageColor, padding :5,borderRadius:5,flexDirection:'row'}}>
        <AntDesign
          name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
          size={12} 
          color={'white'}
           style={{alignSelf:"center", marginRight:5}}
         />
        <Text style={styles.priceChange}>
        {price_change_percentage_24h.toFixed(2)}%
        </Text>
        </View>
        </View>
        <View>
      <ChartPath strokeWidth={2} height={screenWIdth / 2} stroke={chartColor} width={screenWIdth} />
      <ChartDot style={{ backgroundColor: chartColor }} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection:'row', flex:1}}>
            <Text style={{color:'white',alignSelf:'center'}}>{symbol.toUpperCase()}</Text>
        <TextInput style={styles.input}value={coinValue.toString()}/>
        </View>
        <View style={{flexDirection:'row', flex:1}}>
        <Text style={{color:'white',alignSelf:'center'}}>USD</Text>
        <TextInput style={styles.input}value={usdValue.toString()}
        keyboardType="numeric"
        />
        </View>
      </View>
      </ChartPathProvider>
        </View>
    )
};

export default CoinDetailScreencopy;


