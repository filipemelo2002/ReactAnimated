import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';


const ReactAnimated = ({navigation}) => {
  
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Button title="React Animated.decay" onPress={()=> navigation.navigate("Decay")} style={styles.button}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textTransform: "none"
  }
});

export default ReactAnimated