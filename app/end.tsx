import { useGame } from "@/hooks/gameHook";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function End() {
  const { score } = useGame();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("@/assets/images/dinogame.webp")}
      />
      <View>
        <Image
          source={require("@/assets/images/dinopara.webp")}
          style={styles.image}
        />
      </View>

      <View>
        <Image
          source={require("@/assets/images/cactus.webp")}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text>Fim De Jogo</Text>

        <Text>{score}</Text>

        <Link href="/" asChild>
          <Text style={styles.button}>Voltar</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dino: {
    width: 70,
    height: 110,
    position: "absolute",
    zIndex: 10,
    bottom: "40%",
    left: 50,
  },
  obstacle: {
    width: 65,
    height: 65,
    position: "absolute",
    bottom: "30%",
    left: 90,
  },
  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    gap: 10,
    justifyContent: "center",
  },
  Text: {
    width: "auto",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    width: "auto",
    backgroundColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    color: "#ffff",
  },
});
