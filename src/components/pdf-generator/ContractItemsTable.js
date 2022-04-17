import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import ContractTableHeader from "./ContractTableHeader";
import ContractTableRow from "./ContractTableRow";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

const ContractItemsTable = ({ contract }) => (
  <View style={styles.tableContainer}>
    <ContractTableHeader />
    <ContractTableRow contract={null} />
  </View>
);

export default ContractItemsTable;
