import React, {useRef} from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";


const AbsolutePosition = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false
    }).start(() => {
      animation.setValue(0);
    });
  }
  
  const animatedStyles = {
    top: animation,
    left: animation,
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    position: "absolute",
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});


export default AbsolutePosition;