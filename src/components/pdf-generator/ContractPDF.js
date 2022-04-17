import React from "react";
import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";

import logo from "../../pdf-logo.jpg";
import ReportThankYouMsg from "./../reports/ReportThankYouMsg";
import Firms from "./../reports/Firms";
import Information from "./../reports/Information";
import ReportTitle from "./../reports/ReportTitle";
import ContractNumber from "./ContractNumber";
import ContractItemsTable from "./ContractItemsTable";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    flexDirection: "column",
  },
  logo: {
    width: 200,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const ContractPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <ReportTitle title={"OFFICCE SUPLIES TECHNOLOGIES CR"} />

      <ContractNumber data={null} />
      <Information />
      <ContractItemsTable data={null} />

      <Firms />
      <ReportThankYouMsg />
    </Page>
  </Document>
);

export default ContractPDF;
