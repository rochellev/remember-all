import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { selectProfileById } from "./profilesSlice";

// <Image style={{height: "100%", width: "100%"}}source={require("../../assets/pippa-suave.jpg")}/>

export const ProfileView = ({ id }) => {
  const profile = useSelector(state => selectProfileById(state, id));

  return (
    <View style={styles.profileContainer}>
      <View style={styles.coverImageContainer}>
        <Image
          style={styles.fitImage}
          source={profile.coverPic}
        />
      </View>
      <View style={styles.profileImageContainer}>
        <Image  style={[{borderRadius: 75}, styles.fitImage ]}source={profile.profilePic}/>
      </View>
      <Text style={{ padding: 15 }}>{profile.rememberedName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c6c6d2",
    width: "100%"
  },
  coverImageContainer: {
    alignSelf: "center",
    width: 390,
    height: 250,
    padding: 10
  },
  fitImage: { height: "100%", width: "100%" },
  profileImageContainer:{
    alignSelf: "center",
    width: 130,
    height: 130,
    
  }
});
