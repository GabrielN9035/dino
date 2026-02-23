import { useEffect } from "react";
import { Dimensions, Easing, Image, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function MovingBackground() {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-width, {
        duration: 5000,
        easing: Easing.linear,
      }),
      -1,
    );
  }, [offset]);

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image
          style={{ width, height: "100%" }}
          resizeMode="cover"
          source={require("@/assets/images/dinogame.webp")}
        />
        <Image
          style={{ width, height: "100%" }}
          resizeMode="cover"
          source={require("@/assets/images/dinogame.webp")}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  screen: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
  },
});
