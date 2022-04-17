import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  key: {
    width: "50%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  value: {
    width: "50%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
});

let dataFromDB = [
  {
    id: 1,
    description: "Michael frego la pc cobrarcela 0",
    date: "2017-01-03",
  },
  {
    id: 2,
    description: "Michael frego la pc cobrarcela 1",
    date: "2017-01-04",
  },

  {
    id: 4,
    description: "Michael frego la pc cobrarcela 3",
    date: "2017-01-06",
  },
  {
    id: 5,
    description: "Michael frego la pc cobrarcela 4",
    date: "2017-01-07",
  },
];
const ContractTableRow = ({ contract }) => {
  return (
    <>
      {dataFromDB.map((data) => (
        <View key={data.id} style={styles.row}>
          <Text style={styles.key}>{data.description}</Text>
          <Text style={styles.value}>{data.date} </Text>
        </View>
      ))}
    </>
  );
};

export default ContractTableRow;
