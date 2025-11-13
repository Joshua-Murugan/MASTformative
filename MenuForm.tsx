import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { MenuItem } from "./MenuTypes";

interface Props {
  onAddItem: (item: MenuItem) => void;
}

const MenuForm: React.FC<Props> = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !desc.trim() || !price.trim()) {
      Alert.alert("Missing fields", "Please fill in all details");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      description: desc,
      course,
      price: parseFloat(price).toFixed(2),
    };

    onAddItem(newItem);
    Alert.alert("Item Added", `${name} has been added to the menu.`);
    setName("");
    setDesc("");
    setCourse("Starters");
    setPrice("");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., Chicken Curry"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., Spicy Indian style curry"
        placeholderTextColor="#ccc"
        value={desc}
        onChangeText={setDesc}
      />

      <Text style={styles.label}>Select Course</Text>
      <View style={styles.courseRow}>
        {['Starters', 'Mains', 'Dessert'].map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setCourse(c)}
            style={[
              styles.courseButton,
              course === c ? styles.courseButtonActive : undefined,
            ]}
          >
            <Text style={course === c ? styles.courseTextActive : styles.courseText}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., 150"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuForm;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#2c2c2c",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  label: { color: "#ffd700", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    color: "#fff",
    borderRadius: 8,
    marginBottom: 12,
  },
  courseRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  courseButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#444',
    borderRadius: 8,
    alignItems: 'center'
  },
  courseButtonActive: { backgroundColor: '#ffd700' },
  courseText: { color: '#fff' },
  courseTextActive: { color: '#1a1a1a', fontWeight: 'bold' },
  button: {
    backgroundColor: "#ffd700",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#1a1a1a", fontWeight: "bold", fontSize: 16 },
});
