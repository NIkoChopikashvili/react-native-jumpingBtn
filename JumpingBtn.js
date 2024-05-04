import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

const DeleteButton = ({ onDelete }) => {
  const iconSize = 24;

  const scale = useSharedValue(1);

  const buttonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSequence(
      withSpring(0),
      withSpring(1, {}, () => {
        onDelete && onDelete();
      })
    );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View style={[styles.button, buttonStyle]}>
        <AntDesign name="delete" size={iconSize} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DeleteButton;
