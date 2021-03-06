import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';


const ReactAnimated = ({navigation}) => {
  
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={{marginBottom: 8}}>
          <Button title="Opacity" onPress={()=> navigation.navigate("Opacity")}/>
        </View>

        <View style={{marginBottom: 8}}>
          <Button title="Translate" onPress={()=> navigation.navigate("Translate")}/>
        </View>

        <View style={{marginBottom: 8}}>
          <Button title="Scale" onPress={()=> navigation.navigate("Scale")}/>
        </View>

        <View style={{marginBottom: 8}}>
          <Button title="WidthHeight" onPress={()=> navigation.navigate("WidthHeight")}/>
        </View>
        
        <View style={{marginBottom: 8}}>
          <Button title="AbsolutePosition" onPress={()=> navigation.navigate("AbsolutePosition")}/>
        </View>

        <View style={{marginBottom: 8}}>
          <Button title="InterpolateColors" onPress={()=> navigation.navigate("InterpolateColors")}/>
        </View>

        <View style={{marginBottom: 8}}>
          <Button title="Rotation" onPress={()=> navigation.navigate("Rotation")}/>
        </View>

        <View style={{marginBottom: 8}}>
          <Button title="React Animated.decay" onPress={()=> navigation.navigate("Decay")} style={styles.button}/>
        </View>
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
  }
});

export default ReactAnimated