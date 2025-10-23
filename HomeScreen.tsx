import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MenuList from "./MenuList";
import { MenuItem } from "./MenuTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const fadeAnimsRef = useRef<Animated.Value[]>([]);

  // Handle new items added from ManageMenu screen
  useEffect(() => {
    if (route.params?.newItem) {
      const item = route.params.newItem;
      const anim = new Animated.Value(0);
      fadeAnimsRef.current.push(anim);
      setMenuItems((prev) => [...prev, item]);

      const index = fadeAnimsRef.current.length - 1;
      Animated.timing(fadeAnimsRef.current[index], {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();

      // Clear the parameter after handling
      navigation.setParams({ newItem: undefined });
    }
  }, [route.params?.newItem]);

  const resetMenu = () => {
    setMenuItems([]);
    fadeAnimsRef.current = [];
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

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('ManageMenu')}
        >
          <Text style={styles.addButtonText}>Add New Menu Item</Text>
        </TouchableOpacity>

        {menuItems.length > 0 && (
          <TouchableOpacity style={styles.resetButton} onPress={resetMenu}>
            <Text style={styles.resetText}>Reset Menu</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.counter}>Total Items: {menuItems.length}</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animated.View style={{ opacity: fadeAnimsRef.current[index] || 1 }}>
              <MenuList item={item} />
            </Animated.View>
          )}
          style={{ marginTop: 10 }}
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
    marginVertical: 12,
  },
  counter: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#ffd700",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  resetText: { color: "#fff", fontWeight: "bold" },
});

export default HomeScreen;