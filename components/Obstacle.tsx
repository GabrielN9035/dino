import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { Dimensions, Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);
  const { dinoheight } = useGame();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withTiming(
      width,
      {
        duration: 3000,
        easing: Easing.linear,
      },
      onEnd,
    );
  }, []);

  useAnimatedReaction(
    () => {
      return offset.value;
    },
    (currentValue) => {
      const left = Math.max(50, width - currentValue);
      const right = Math.min(80, width - currentValue + 65);
      const bottom = Math.max(0, dinoheight.value);
      const top = 65;

      if (left > right || bottom > top) {
        console.log("No collision");
        return;
      }
      console.log("Collision");
    },
  );

  return (
    <Animated.View style={[styles.obstacle, animatedStyle]}>
      <Image
        source={require("@/assets/images/cactus.webp")}
        resizeMode="contain"
        style={styles.image}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  obstacle: {
    width: 65,
    height: 65,
    position: "absolute",
    bottom: "30%",
    right: 0,
  },
});
