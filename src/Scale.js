import {useRef} from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";


const Scale = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const  startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: true
    }).start(() => {
      animation.setValue(1);
    });
  }
  

  const animatedStyles = {
    transform: [
      { scale: animation }
    ]
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});


export default Scale;