import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProfileView } from "./src/profiles/ProfileView";
import Constants from "expo-constants";
import { getStore } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={getStore()}>
        <SafeAreaView style={styles.container}>
          <ProfileView id={10} />
          <View></View>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
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
