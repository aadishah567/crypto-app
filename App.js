import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CoinDetailScreen  from './src/screens/CoinDetailScreen';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer theme={{
      colors:{
        background:'#121212'
      }
    }}>
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="light" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  }
});
