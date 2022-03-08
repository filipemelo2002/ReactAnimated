import React, { useRef } from "react";
import { View, Animated, PanResponder, StyleSheet } from "react-native";

const Decay = () => {
  const animation = useRef(new Animated.ValueXY(0)).current;
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animation.extractOffset()
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: animation.x,
            dy: animation.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997,
          useNativeDriver: true
        }).start();
      },
    })
  ).current;

  const animatedStyle = {
    transform: animation.getTranslateTransform(),
  };


  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, animatedStyle]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
  },
});

export default Decay;
