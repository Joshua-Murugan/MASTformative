import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "./MenuTypes";

interface Props {
  item: MenuItem;
}

const MenuList: React.FC<Props> = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.course}>{item.course}</Text>
    <Text style={styles.desc}>{item.description}</Text>
    <Text style={styles.price}>R {item.price}</Text>
  </View>
);

export default MenuList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  name: { fontSize: 18, color: "#ffd700", fontWeight: "bold" },
  course: { fontSize: 14, color: "#aaa", marginBottom: 4 },
  desc: { color: "#fff", marginBottom: 6 },
  price: { color: "#00ffcc", fontWeight: "bold", textAlign: "right" },
});
