import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [touchedLiked, setTouchedLiked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pressable Button</Text>

      <Pressable
        onPress={() => setLiked(!liked)}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "#ffb6c1" : "#e8e8e8",
          },
        ]}
      >
        <Text style={styles.buttonText}>{liked ? "♥ Liked" : "♡ Like"}</Text>
      </Pressable>

      <Text style={styles.heading}>TouchableOpacity Button</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => setTouchedLiked(!touchedLiked)}
      >
        <Text style={styles.buttonText}>
          {touchedLiked ? "♥ Liked" : "♡ Like"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#e8e8e8",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
