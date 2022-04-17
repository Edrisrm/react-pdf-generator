import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  information: {
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});

const Information = ({}) => (
  <View>
    <Text style={styles.information}>Informacion:</Text>
    <Text>Hacienda el Orosi</Text>
    <Text>La Garita</Text>
    <Text>+(506) 2679 8114</Text>
    <Text>haciendaelorosi@gmail.com</Text>
  </View>
);

export default Information;
