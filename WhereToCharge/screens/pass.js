import React from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";

const Pass = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/Chargemap.png")} style={styles.image} />
      <Image source={require("../assets/Izivia.png")} style={styles.image} />
      <Image
        source={require("../assets/Plugsurfing.png")}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
  },
});

export default Pass;
