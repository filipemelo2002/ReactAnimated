import {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const InterpolateColors = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 3,
      duration: 1500,
      useNativeDriver: false
    }).start(() => {
      animation.setValue(0);
    });
  };


  const colorInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)", "rgb(71,255,99)"],
  });

  const animatedStyles = {
    backgroundColor: colorInterpolate,
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
  },
});

export default InterpolateColors;
