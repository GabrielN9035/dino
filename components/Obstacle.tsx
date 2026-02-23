import { useEffect } from "react";
import { Dimensions, Easing, Image, StyleSheet } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);

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
