import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

interface IButton {
  type?: string;
  style?: any;
  text?: string;
  secondary?: boolean;
  onPress: () => void;
}

const Button: FC<IButton> = ({ style, text, onPress, secondary, ...props }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress();
        // setIsActive(true);
      }}
      // onBlur={() => setIsActive(false)}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <View
        style={[
          styles.focusBorder,
          { borderColor: isActive ? "rgba(18, 192, 221, 0.3)" : "transparent" },
        ]}
      >
        <View
          style={[
            styles.wrapper,
            style,
            { backgroundColor: secondary ? "transparent" : "#12C0DD" },
          ]}
        >
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#12C0DD",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Rubik-500",
  },
  focusBorder: {
    borderRadius: 14,
    borderWidth: 3,
  },
});

export default Button;
