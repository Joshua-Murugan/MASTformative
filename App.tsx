import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ManageMenuScreen from "./ManageMenuScreen";
import FilterScreen from "./FilterScreen";
import { MenuItem } from "./MenuTypes";

export type RootStackParamList = {
  Home: undefined;
  ManageMenu: undefined;
  Filter: { menuItems: MenuItem[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prev) => [...prev, item]);
  };

  const removeMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#ffd700",
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Chef's Menu" }}>
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              removeMenuItem={removeMenuItem}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ManageMenu" options={{ title: "Add Menu Item" }}>
          {(props) => (
            <ManageMenuScreen {...props} addMenuItem={addMenuItem} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Filter"
          options={{ title: "Filter Menu by Course" }}
          component={FilterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
