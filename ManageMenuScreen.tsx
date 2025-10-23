import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuForm from './MenuForm';
import { MenuItem } from './MenuTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'ManageMenu'>;

const ManageMenuScreen: React.FC<Props> = ({ navigation }) => {
  const handleAddItem = (item: MenuItem) => {
    // Navigate back to home screen and pass the new item
    navigation.navigate('Home', { newItem: item });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1600891964091-0b4f1f7d0eaa?auto=format&fit=crop&w=800&q=80",
      }}
      style={styles.bg}
    >
      <SafeAreaView style={styles.container}>
        <MenuForm onAddItem={handleAddItem} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { 
    flex: 1 
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: 20,
  },
});

export default ManageMenuScreen;