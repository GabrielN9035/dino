import Dino from "@/components/Dino";
import MovingBackground from "@/components/MovingBackground";
import Score from "@/components/Score";
import { useGame } from "@/hooks/gameHook";
import { Pressable, StyleSheet, View } from "react-native";
export default function GameScreen() {
  const { jump } = useGame();

  return (
    <Pressable onPress={jump} style={styles.button}>
      <View style={styles.container}>
        <MovingBackground />
        <Dino />
        <Score />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#99D9EA",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
