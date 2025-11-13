import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MenuItem } from "./MenuTypes";

interface Props {
  item: MenuItem;
  onRemove?: () => void;
}

const MenuList: React.FC<Props> = ({ item, onRemove }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.course}>{item.course}</Text>
    <Text style={styles.desc}>{item.description}</Text>
    <Text style={styles.price}>R {item.price}</Text>
    {onRemove && (
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: { fontSize: 18, color: "#ffd700", fontWeight: "bold" },
  course: { fontSize: 14, color: "#aaa", marginBottom: 4 },
  desc: { color: "#fff", marginBottom: 6 },
  price: { color: "#00ffcc", fontWeight: "bold", textAlign: "right" },
  removeButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 6,
    marginTop: 6,
    alignItems: "center",
  },
  removeText: { color: "#fff", fontWeight: "bold" },
});

export default MenuList;
