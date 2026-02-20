import { Link } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/wall.jpg")}
      resizeMode="stretch"
      style={styles.background}
    >
      <View style={styles.container}>
        <Link href="/game" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>Jogar</Text>
          </TouchableOpacity>
        </Link>
      </View>
      s
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#9c2323",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 999,
    marginBottom: 50,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
