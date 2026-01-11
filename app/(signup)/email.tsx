import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const UserNameEmailScreen = () => {
  const localImageSource = require("@/assets/images/signup-Illustration.png");
  const router = useRouter();

  return (
    <View style={styles?.container}>
      <View style={styles?.card}>
        <View>
          <Text style={styles?.loginHeading}>Welcome To Us</Text>
          <Text>Hello there, Create an Account</Text>
        </View>
        <Image source={localImageSource} style={styles.image} />
        <View>
          <TextInput placeholder="User Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.push("/security")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Text style={styles.signInButtonText}>Next</Text>
              <ChevronRight size={20} color="#3629B7" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserNameEmailScreen;

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
    borderColor: "#CBCBCB",
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
