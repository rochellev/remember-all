import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { ProfileView } from "./src/profiles/ProfileView";
import Constants from "expo-constants";
import { getStore } from "./store";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "This is param sent from Home to the Details route"
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={getStore()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    justifyContent: "center"
  }
});
