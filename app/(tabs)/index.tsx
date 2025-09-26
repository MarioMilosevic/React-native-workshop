import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Edit app/index.tsx to edit this screen. Mario</Text>

      <Link style={styles.navButton} href="/mario">
        Login page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
