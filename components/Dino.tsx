import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Dino() {
  const { jumping, stopJump } = useGame();

  const dinoheight = useSharedValue(0);

  function handleJump() {
    dinoheight.value = withSequence(
      withTiming(-100, {
        duration: 400,
        easing: Easing.linear,
      }),
      withTiming(
        0,
        {
          duration: 400,
          easing: Easing.linear,
        },
        () => stopJump(),
      ),
    );
  }
  useEffect(() => {
    if (jumping) {
      handleJump();
    }
  }, [jumping]);

  const AnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: dinoheight.value,
      },
    ],
  }));
  return (
    <Animated.View style={[styles.dino, AnimatedStyle]}>
      {jumping ? (
        <Image
          source={require("@/assets/images/dinopara.png")}
          resizeMode="contain"
          style={styles.image}
        />
      ) : (
        <Image
          source={require("@/assets/images/dinoCorre.gif")}
          resizeMode="contain"
          style={styles.image}
        />
      )}
      ;
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dino: {
    width: 125,
    height: 100,
    position: "absolute",
    zIndex: 10,
    bottom: "28%",
    left: "10%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
