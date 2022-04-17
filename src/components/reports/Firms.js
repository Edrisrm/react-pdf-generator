import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom : 20,
  },
  key: {
    width: "50%",
    textAlign: "left",
  },
  value: {
    width: "50%",
    textAlign: "right",
  },
});

const Firms = () => {
  return (
    <Fragment>
      <View style={styles.row}>
        <Text style={styles.key}>Firma del encargado:</Text>
        <Text style={styles.key}>Firma del cliente:</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.key}>__________________________</Text>
        <Text style={styles.key}>__________________________</Text>
      </View>
    </Fragment>
  );
};

export default Firms;
