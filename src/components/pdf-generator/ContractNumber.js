import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  label: {
    color: '#A4001E',
  },
});

const ContractNumber = ({ data }) => (
  <Fragment>
    <View style={styles.container}>
      <Text style={styles.label}>Boleta de salida: </Text>
      <Text>001</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.label}>Fecha inicial: </Text>
      <Text> 20/20/200</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.label}>Fecha de expiracion: </Text>
      <Text> 20/20/200</Text>
    </View>
  </Fragment>
);

export default ContractNumber;
