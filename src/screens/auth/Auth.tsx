import React, { FC, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
} from "react-native";
import { styleCenter } from "../../components/layout/Layout";
import { LinearGradient } from "expo-linear-gradient";
import FacebookIcon from "./icons/FacebookIcon";
import AppleIcon from "./icons/AppleIcon";
import GoogleIcon from "./icons/GoogleIcon";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();

  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);

  const openUrl = (url: string) => {
    Linking.openURL(url).then((res) => res);
  };

  const fastLoginItems = [
    { id: 0, icon: <FacebookIcon /> },
    { id: 1, icon: <AppleIcon /> },
    { id: 2, icon: <GoogleIcon /> },
  ];

  return (
    <LinearGradient
      style={styleCenter}
      colors={["rgba(26, 228, 182, 1)", "rgba(7, 47, 185, 1)"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.0, 0.99]}
    >
      <ScrollView style={[styles.container, {}]}>
        <SafeAreaView style={[styles.container, {}]}>
          <View style={styles.content}>
            <Text style={styles.title}>Mnemonista</Text>

            <View style={styles.fastLogin}>
              <Text style={styles.fastLoginTitle}>Быстрый вход через</Text>
              <View style={styles.fastLoginItems}>
                {fastLoginItems.map((el) => (
                  <TouchableOpacity key={String(el.id)} activeOpacity={0.5}>
                    <View style={styles.fastLoginItem}>{el.icon}</View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.authForm}>
              <Text style={styles.authFormTitle}>
                {isReg ? "Регистрация:" : "Авторизация:"}
              </Text>
              <View style={styles.authFromFields}>
                <Input
                  value={data.email}
                  onChange={(text) => setData({ ...data, email: text })}
                  label="Электронная почта"
                  labelStyles={{ color: "#F7F7F8" }}
                  placeholder="qweasdzxc@gmail.com"
                  onFocus={() => console.log("click")}
                  inputContainerStyles={{ width: 295 }}
                />

                <Input
                  value={data.password}
                  onChange={(text) => setData({ ...data, password: text })}
                  isPassword
                  label="Пароль"
                  labelStyles={{ color: "#F7F7F8" }}
                  placeholder={isReg ? "Придумайте пароль" : "Введите пароль"}
                  onFocus={() => console.log("click")}
                  inputContainerStyles={{ width: 295 }}
                  wrapperStyles={{ marginTop: 15 }}
                />

                <View style={styles.authFormButton}>
                  <Button
                    style={{ width: 295 }}
                    text={isReg ? "Зарегистрироваться" : "Войти"}
                    onPress={() => {
                      isReg
                        ? register(data.email, data.password)
                        : login(data.email, data.password);
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.choice}>
              <View style={styles.choiceOr}>
                <View style={styles.choiceOrMiddleLine} />
                <Text style={styles.choiceOrText}>Или</Text>
                <View style={styles.choiceOrMiddleLine} />
              </View>

              <Button
                secondary
                style={{ width: 295 }}
                text={isReg ? "Войти" : "Зарегистрироваться"}
                onPress={() => {
                  isReg ? setIsReg(false) : setIsReg(true);
                }}
              />
            </View>

            <Text style={styles.authInfo}>
              Зарегистрировавшись, вы принимаете условия, которые содержат
              <Text
                style={styles.link}
                onPress={() => openUrl("https://www.google.com/")}
              >
                {" "}
                Условия предоставления услуг
              </Text>{" "}
              и
              <Text
                style={styles.link}
                onPress={() => openUrl("https://www.google.com/")}
              >
                {" "}
                Политику конфиденциальности{" "}
              </Text>
              Mnemonista
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: styleCenter,
  content: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // marginTop: 20,
    // paddingHorizontal: 20,
  },

  title: {
    fontSize: 35,
    color: "#FFFFFF",
    fontFamily: "Rubik-700",
  },

  fastLogin: {
    marginTop: 24,
    paddingTop: 20,
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  fastLoginTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Rubik-500",
  },
  fastLoginItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fastLoginItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    margin: 20,
  },

  authForm: {
    marginTop: 24,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  authFormTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Rubik-500",
  },
  authFromFields: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  authFormButton: {
    marginTop: 25,
  },

  choice: {
    alignItems: "center",
  },
  choiceOr: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  choiceOrMiddleLine: {
    backgroundColor: "#42CCE4",
    height: 1,
    width: 90,
  },
  choiceOrText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Rubik-400",
  },
  choiceAlternativeButton: {},

  authInfo: {
    marginTop: 16,
    color: "#FFFFFF",
    fontFamily: "Rubik-400",
    fontSize: 13,
    lineHeight: 17,
    width: 335,
    textAlign: "center",
  },
  link: {
    color: "#12C0DD",
  },
});

export default Auth;
