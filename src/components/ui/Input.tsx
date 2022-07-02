import React, { FC } from "react";
import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";

interface IInput {
  label?: string;
  iconLeft?: string;
  error?: string;
  isPassword?: boolean;

  onFocus: () => void;
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;

  //styles for elements
  labelStyles?: any;
  inputContainerStyles?: any;
  wrapperStyles?: any;
  style?: any;
}

const Input: FC<IInput> = ({
  label,
  isPassword,
  error,
  iconLeft,
  onFocus,
  labelStyles,
  inputContainerStyles,
  value,
  onChange,
  wrapperStyles,

  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={wrapperStyles}>
      <Text style={[styles.label, labelStyles]}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyles,
          { borderColor: isFocused ? "#A0E6F1" : "transparent" },
        ]}
      >
        {iconLeft ? <View style={styles.iconLeft}>{iconLeft}</View> : null}
        <TextInput
          secureTextEntry={isPassword}
          autoCapitalize={"none"}
          value={value || ""}
          onChangeText={onChange}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          autoCorrect={false}
          style={styles.textInput}
          placeholderTextColor="#C4C7CF"
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: "Rubik-400",
    color: "#3D4452",
    marginBottom: 5,
  },
  inputContainer: {
    height: 40,
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: "#F7F7F8",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  iconLeft: {},
  textInput: {
    color: "#25282D",
    fontSize: 14,
    fontFamily: "Rubik-400",
    width: "100%",
  },
});

export default Input;
