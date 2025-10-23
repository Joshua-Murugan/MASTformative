import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ManageMenuScreen from "./ManageMenuScreen";
import { MenuItem } from "./MenuTypes";

// Define the type for our navigation stack parameters
export type RootStackParamList = {
  Home: { newItem?: MenuItem };
  ManageMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#ffd700",
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: "Chef's Menu",
          }}
        />
        <Stack.Screen 
          name="ManageMenu" 
          component={ManageMenuScreen}
          options={{
            title: "Add Menu Item",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
