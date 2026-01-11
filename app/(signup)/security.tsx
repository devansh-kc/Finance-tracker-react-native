import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ChevronDown, ChevronRight } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignupSecurityQuestionAnswer = () => {
  const localImageSource = require("@/assets/images/signup-Illustration.png");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const router = useRouter();

  const SECURITY_QUESTIONS = [
    "What was the name of your first pet?",
    "What is your mother's maiden name?",
    "What city were you born in?",
    "What was the name of your first school?",
    "What is your favorite book?",
    "What was your childhood nickname?",
    "What is the name of your favorite teacher?",
  ];
  return (
    <View style={styles?.container}>
      <View style={styles?.card}>
        <View>
          <Text style={styles?.loginHeading}>Welcome To Us</Text>
          <Text>Security Question</Text>
        </View>
        <Image source={localImageSource} style={styles.image} />
        <View>
          {/* Dropdown for Security Question */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setDropdownVisible(true)}
          >
            <Text
              style={[
                styles.dropdownText,
                !selectedQuestion && styles.placeholderText,
              ]}
            >
              {selectedQuestion || "Select Security Question"}
            </Text>
            <ChevronDown size={20} color="#666" />
          </TouchableOpacity>
          <Modal
            visible={dropdownVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setDropdownVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPress={() => setDropdownVisible(false)}
            >
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Security Question</Text>

                <ScrollView style={styles.questionList}>
                  {SECURITY_QUESTIONS.map((question, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.questionItem}
                      onPress={() => {
                        setSelectedQuestion(question);
                        setDropdownVisible(false);
                      }}
                    >
                      <Text style={styles.questionText}>{question}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setDropdownVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Answer The Question"
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.push("/email")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Text style={styles.signInButtonText}>Sign Up</Text>
              <ChevronRight size={20} color="#3629B7" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupSecurityQuestionAnswer;

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

  // DROPDOWN styles.
  dropdown: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    borderColor: "#CBCBCB",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#000",
    flex: 1,
  },
  placeholderText: {
    color: "#999",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "85%",
    maxHeight: "70%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3629B7",
    marginBottom: 15,
    textAlign: "center",
  },
  questionList: {
    maxHeight: 400,
  },
  questionItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  questionText: {
    fontSize: 15,
    color: "#333",
  },
  cancelButton: {
    marginTop: 15,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
  },
});
