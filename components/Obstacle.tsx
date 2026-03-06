import cactusBitmap from "@/assets/bitmaps/cactus.json";
import dinoJumpingBitmap from "@/assets/bitmaps/dino.json";
import dinoMovingBitmap from "@/assets/bitmaps/dino_moving.json";
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
      const cactusPosition = width - Math.round(currentValue);
      const left = Math.max(50, cactusPosition);
      const right = Math.min(130, cactusPosition + 65);
      const bottom = Math.max(0, dinoheight.value);
      const top = 65;

      if (left > right || bottom > top) {
        return;
      }
      console.log("Collision");
      for (let x = left; x < right; x++) {
        for (let y = bottom; y < top; y++) {
          console.log(x, y);
          const xDino = x - 50;
          const xCactus = x - cactusPosition;
          const yDino = 80 - (y - dinoheight.value);
          const yCactus = 65 - y;

          const dinoBitmap =
            dinoheight.value > 0 ? dinoJumpingBitmap : dinoMovingBitmap;

          if (
            xDino < 80 &&
            xDino > -1 &&
            yDino < 80 &&
            yDino > -1 &&
            xCactus < 65 &&
            xCactus > -1 &&
            yCactus < 65 &&
            yCactus > -1 &&
            dinoBitmap[xDino][yDino] &&
            cactusBitmap[xCactus][yCactus]
          ) {
            console.log("Pixel collision");
          }
        }
      }
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
