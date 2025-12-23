import { Colors } from "@/constants/theme";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../header/header-component";

function LoginScreen() {
  const localImageSource = require("@/assets/images/login-screen-img.png");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderComponent title="Sign in" />
      <View style={styles?.container}>
        <View style={styles?.card}>
          <View>
            <Text style={styles?.loginHeading}>Welcome Back</Text>
            <Text>Hello there, sign in to continue</Text>
          </View>
          <Image source={localImageSource} style={styles.image} />{" "}
          <View>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot your password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don&apos;t have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
    resizeMode: "contain",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#C4C4C4",
    fontSize: 14,
    marginTop: 8,
  },
  signInButton: {
    backgroundColor: "#E8E6F7",
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 24,
  },
  signInButtonText: {
    color: "#3629B7",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    borderColor: "#ccc",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors?.light?.primary,
  },
  card: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    padding: 25,
  },
  loginHeading: {
    fontSize: 28,
    fontWeight: "600",
    color: "#3629B7",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  signUpText: {
    color: "#666666",
    fontSize: 15,
  },
  signUpLink: {
    color: "#3629B7",
    fontSize: 15,
    fontWeight: "600",
  },
});
