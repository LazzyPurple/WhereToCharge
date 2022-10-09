import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

const Route = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ startpoint: "", endpoint: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View styles={styles.inputContainer}>
            <TextInput
              placeholder="Départ"
              onChangeText={handleChange("startpoint")}
              value={values.startpoint}
              style={styles.input}
            />
            <TextInput
              placeholder="Arrivée"
              onChangeText={handleChange("endpoint")}
              value={values.endpoint}
              style={styles.inputStart}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text>Configurer</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4c2c2",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    fontSize: 18,
  },
  inputStart: {
    marginTop: 10,
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    width: 150,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
});

export default Route;
