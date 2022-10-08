import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import MapView from "react-native-maps";
import markers from "../data/marker";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: 48.85619,
        longitude: 2.30796,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    ></MapView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
