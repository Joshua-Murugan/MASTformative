import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";
import { MenuItem } from "./MenuTypes";
import MenuList from "./MenuList";

type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {
  menuItems: MenuItem[];
  removeMenuItem: (id: string) => void;
};

const HomeScreen: React.FC<Props> = ({ navigation, menuItems, removeMenuItem }) => {
  const averageByCourse = (course: string) => {
    const filtered = menuItems.filter((i) => i.course === course);
    if (filtered.length === 0) return "0.00";
    const avg =
      filtered.reduce((sum, i) => sum + parseFloat(i.price), 0) /
      filtered.length;
    return avg.toFixed(2);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600891964091-0b4f1f7d0eaa?auto=format&fit=crop&w=800&q=80",
      }}
      style={styles.bg}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>🍴 Chef Christoffel's Menu</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("ManageMenu")}
          >
            <Text style={styles.addButtonText}>Add Menu Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation.navigate("Filter", { menuItems })}
          >
            <Text style={styles.addButtonText}>Filter Menu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.avgContainer}>
          <Text style={styles.avgText}>⭐ Average Prices by Course</Text>
          <Text style={styles.avgItem}>Starters: R {averageByCourse("Starters")}</Text>
          <Text style={styles.avgItem}>Mains: R {averageByCourse("Mains")}</Text>
          <Text style={styles.avgItem}>Dessert: R {averageByCourse("Dessert")}</Text>
        </View>

        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MenuList item={item} onRemove={() => removeMenuItem(item.id)} />
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd700",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "#ffd700",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#00cc99",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  addButtonText: { color: "#1a1a1a", fontWeight: "bold" },
  avgContainer: { marginVertical: 10 },
  avgText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  avgItem: { color: "#ffd700" },
});

export default HomeScreen;
