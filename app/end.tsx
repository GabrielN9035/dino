import { useGame } from "@/hooks/gameHook";
import { ImageBackground, View } from "react-native";

export default function End() {
  const { score } = useGame();
  return (
    <View style={styles.container}>
      <ImageBackground source={require("@/assets/images/wall.jpg")} />
      style={styles.container}
      source={require("@/assets/images")}
    </View>
  );
}
