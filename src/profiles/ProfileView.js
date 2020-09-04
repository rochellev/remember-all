import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";
import { selectProfileById } from "./profilesSlice";

// <Image style={{height: "100%", width: "100%"}}source={require("../../assets/pippa-suave.jpg")}/>
const CoverImage = ({ image }) => {
  return (
    <View style={styles.coverImageContainer}>
      <Image style={styles.fitImage} source={image} />
    </View>
  );
};

const ProfileImage = ({ image }) => {
  return (
    <View style={[styles.profileImageContainer, styles.shadows]}>
      <Image style={[{ borderRadius: 75 }, styles.fitImage]} source={image} />
    </View>
  );
};

export const ProfileView = ({ id }) => {
  const profile = useSelector(state => selectProfileById(state, id));
  return (
    <View style={styles.profileContainer}>
      <CoverImage image={profile.coverPic} />
      <ProfileImage image={profile.profilePic} />
      <Text style={{ padding: 15 }}>{profile.rememberedName}</Text>
      <View>
        <Text>Gallery goes here</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c6c6d2",
    width: "100%",
    paddingTop: 10
  },
  coverImageContainer: {
    alignSelf: "center",
    width: 390,
    height: 250
  },
  fitImage: { height: "100%", width: "100%" },
  profileImageContainer: {
    alignSelf: "center",
    width: 130,
    height: 130,
    position: "absolute",
    left: 150,
    top: 190,
    borderColor: "rgba(86, 97, 112, .12)",
    borderWidth: 2,

    borderRadius: 75
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.35,
    shadowRadius: 12.84,

    elevation: 15
  }
});
