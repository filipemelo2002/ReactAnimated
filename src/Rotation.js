import {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const Rotation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start(() => {
      animation.setValue(0);
    });
  };

  const xInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
    // outputRange: ["0rad", "6.28319rad"]
  });

  const yInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "0deg", "180deg"],
    // outputRange: ["0rad", "0rad", "3.141595rad"]
  });

  const animatedStyles = {
    transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>  
  );
};

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
  },
});


export default Rotation;