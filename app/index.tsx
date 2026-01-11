import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import {
  ArrowLeftRight,
  Banknote,
  Bell,
  CreditCard,
  FileText,
  House,
  Mail,
  PiggyBank,
  Receipt,
  Search,
  Settings,
  Smartphone,
  Users,
} from "lucide-react-native";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const router = useRouter();
  const actions = [
    { icon: CreditCard, label: "Account\nand Card", color: "#6366f1" },
    { icon: ArrowLeftRight, label: "Transfer", color: "#ef4444" },
    { icon: Banknote, label: "Withdraw", color: "#3b82f6" },
    { icon: Smartphone, label: "Mobile\nprepaid", color: "#f59e0b" },
    { icon: Receipt, label: "Pay the\nbill", color: "#10b981" },
    { icon: PiggyBank, label: "Save\nonline", color: "#8b5cf6" },
    { icon: CreditCard, label: "Credit\ncard", color: "#f97316" },
    { icon: FileText, label: "Transaction\nreport", color: "#6366f1" },
    { icon: Users, label: "Beneficiary", color: "#ec4899" },
  ];

  const Tabs = [
    { icon: House, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Mail, label: "Messages" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <SafeAreaView style={styles?.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.light.primary}
      />
      {/* Header */}

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>PP</Text>
            </View>
            <Text style={styles.greeting}>Hi, Push Puttichai</Text>
          </View>
          <TouchableOpacity style={styles.notificationBadge}>
            <Bell size={24} color="#fff" />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Credit Card */}
        <View style={styles?.creditCardWrapper}>
          <View style={styles?.creditCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardChip} />
              <Text style={styles.cardType}>Amazon Platinium</Text>
            </View>
            {/* Card Number */}
            <Text style={styles.cardNumber}>4756 •••• •••• 9018</Text>
            <View style={styles.cardFooter}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardLabel}>Card Holder</Text>
                <Text style={styles.cardValue}>John Smith</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardLabel}>Expires</Text>
                <Text style={styles.cardValue}>12/28</Text>
              </View>
            </View>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceLabel}>Current Balance</Text>
              <Text style={styles.balanceAmount}>$3,469.52</Text>
            </View>
            <View style={styles.cardBrand}>
              <Text style={styles?.visaText}>Visa</Text>
            </View>
          </View>
        </View>

        {/* Actions Grid */}
        <View style={styles.actionsGrid}>
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionButton}
              activeOpacity={0.7}
              onPress={() => {
                // Add your navigation or action here
                console.log(`${action.label} pressed`);
              }}
            >
              <View
                style={[
                  styles.actionIconContainer,
                  { backgroundColor: `${action.color}15` },
                ]}
              >
                <action.icon size={24} color={action.color} strokeWidth={2.5} />
              </View>
              <Text style={styles.actionLabel} numberOfLines={2}>
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.dropDownWrapper}>
        {Tabs?.map((tab) => (
          <tab.icon size={24} strokeWidth={2.5} key={tab.label} />
        ))}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
  },
  header: {
    backgroundColor: Colors.light.primary,
    paddingBottom: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  creditCardWrapper: {
    marginBottom: 24,
  },
  creditCard: {
    backgroundColor: "#1a1a2e",
    borderRadius: 20,
    padding: 24,
    minHeight: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    position: "relative",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  cardChip: {
    width: 45,
    height: 35,
    backgroundColor: "#f7d794",
    borderRadius: 6,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardInfo: {
    flex: 1,
  },
  cardLabel: {
    color: "#fff",
    fontSize: 10,
    opacity: 0.6,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  cardValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  cardType: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.9,
  },
  cardNumber: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    letterSpacing: 2,
    marginBottom: 24,
  },
  balanceContainer: {
    marginTop: 8,
  },
  balanceLabel: {
    color: "#fff",
    fontSize: 11,
    opacity: 0.7,
    marginBottom: 4,
  },
  balanceAmount: {
    color: "#4ade80",
    fontSize: 28,
    fontWeight: "700",
  },
  cardBrand: {
    position: "absolute",
    bottom: 20,
    right: 24,
  },
  visaText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "italic",
    opacity: 0.8,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#7c3aed",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  greeting: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },

  notificationBadge: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ef4444",
    borderWidth: 2,
    borderColor: "#5b21b6",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingBottom: 100,
  },
  actionButton: {
    width: "31%", // Better spacing for 3 columns
    alignItems: "center",
    marginBottom: 24,
    paddingVertical: 8,
  },
  actionIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    // iOS Shadow
    shadowColor: "#F2F0EF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    // Android Shadow
    elevation: 3,
  },
  actionLabel: {
    fontSize: 12,
    color: "#4a5568",
    textAlign: "center",
    lineHeight: 16,
    fontWeight: "500",
    paddingHorizontal: 4,
  },
  dropDownWrapper: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "space-around",
    padding: 20,
  },
});
