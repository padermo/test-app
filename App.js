import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates'

export default function App() {
  async function onFetchUpdate(){
    try {
      const update = await Updates.checkForUpdateAsync();

      if(update.isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  useEffect(()=>{
    onFetchUpdate();
  },[])

  return (
    <View style={styles.container}>
      <Text>activando update</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
