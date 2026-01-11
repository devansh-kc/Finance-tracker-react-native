import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function SignupLayout() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors?.light?.primary}
      />
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: Colors?.light?.primary,
          },
          headerTintColor: "#fff",
          animation: "default",
          contentStyle: {
            flexDirection: "row",
            alignItems: "center",

            backgroundColor: Colors?.light?.primary,
          },
        }}
      >
        <Stack.Screen name="name" options={{ title: "User Information" }} />
        <Stack.Screen name="email" options={{ title: "Account Details" }} />
        <Stack.Screen name="security" options={{ title: "Security" }} />
      </Stack>
    </>
  );
}
