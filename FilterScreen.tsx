import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { MenuItem } from "./MenuTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";
import MenuList from "./MenuList";

type Props = NativeStackScreenProps<RootStackParamList, "Filter">;

const FilterScreen: React.FC<Props> = ({ route }) => {
  const { menuItems } = route.params;
  const [selectedCourse, setSelectedCourse] = useState<string>("All");

  const filteredItems =
    selectedCourse === "All"
      ? menuItems
      : menuItems.filter((item) => item.course === selectedCourse);

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600891964091-0b4f1f7d0eaa?auto=format&fit=crop&w=800&q=80",
      }}
      style={styles.bg}
    >
      <View style={styles.container}>
        <View style={styles.filterRow}>
          {["All", "Starters", "Mains", "Dessert"].map((course) => (
            <TouchableOpacity
              key={course}
              style={[
                styles.filterButton,
                selectedCourse === course && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedCourse(course)}
            >
              <Text
                style={
                  selectedCourse === course
                    ? styles.filterTextActive
                    : styles.filterText
                }
              >
                {course}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuList item={item} />}
        />
      </View>
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
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 4,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#333",
    alignItems: "center",
  },
  filterButtonActive: {
    backgroundColor: "#ffd700",
  },
  filterText: { color: "#fff" },
  filterTextActive: { color: "#1a1a1a", fontWeight: "bold" },
});

export default FilterScreen;
