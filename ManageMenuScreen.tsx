import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuForm from "./MenuForm";
import { MenuItem } from "./MenuTypes";

interface Props {
  navigation: any;
  addMenuItem: (item: MenuItem) => void;
}

const ManageMenuScreen: React.FC<Props> = ({ navigation, addMenuItem }) => {
  const handleAdd = (item: MenuItem) => {
    addMenuItem(item);
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600891964091-0b4f1f7d0eaa?auto=format&fit=crop&w=800&q=80",
      }}
      style={styles.bg}
    >
      <SafeAreaView style={styles.container}>
        <MenuForm onAddItem={handleAdd} />
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
});

export default ManageMenuScreen;
