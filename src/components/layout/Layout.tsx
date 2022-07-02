import React, { FC } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

interface ILayout {
  isScrollView?: boolean;
}

export const styleCenter = {
  height: "100%",
  width: "100%",
  paddingTop: 16,
};

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>
  );
};

const styles = StyleSheet.create({});

export default Layout;
