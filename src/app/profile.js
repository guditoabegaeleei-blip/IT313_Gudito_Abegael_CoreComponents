import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image source={require("../../assets/abe.png")} style={styles.image} />
      <Text style={styles.name}>Abegael E. Gudito</Text>
      <Text style={styles.role}>IT Student</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
});
