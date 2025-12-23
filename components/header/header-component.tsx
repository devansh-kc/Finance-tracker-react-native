import { Colors } from "@/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

export function HeaderComponent({
  title,
  showBackButton = true,
}: Readonly<HeaderProps>) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>
            <ChevronLeft color="#ffffff" />
          </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors?.light?.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    color: "#ffffff",
    fontSize: 24,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
