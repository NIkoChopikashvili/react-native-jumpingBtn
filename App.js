import { StyleSheet, Text, View } from "react-native";
import DeleteButton from "./JumpingBtn";

export default function App() {
  return (
    <View style={styles.container}>
      <DeleteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
