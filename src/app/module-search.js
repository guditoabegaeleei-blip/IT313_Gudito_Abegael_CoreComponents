import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function ModuleSearch() {
  const [query, setQuery] = useState("");

  const modules = [
    "Introduction to React Native",
    "React Fundamentals",
    "Components and JSX",
    "React State and Hooks",
    "Core Components",
    "Navigation in React Native",
  ];

  const filteredModules = modules.filter((title) =>
    title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Modules</Text>

      <TextInput
        style={styles.input}
        placeholder="Type a module title..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView>
        {filteredModules.length > 0 ? (
          filteredModules.map((title) => (
            <Text key={title} style={styles.module}>
              {title}
            </Text>
          ))
        ) : (
          <Text style={styles.empty}>No modules found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  module: {
    fontSize: 16,
    padding: 15,
    marginBottom: 8,
    backgroundColor: "#eeeeee",
    borderRadius: 8,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});
