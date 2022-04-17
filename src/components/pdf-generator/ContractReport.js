import React, { Fragment } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ContractPDF from "./ContractPDF";
import { useSelector } from "react-redux";
export const Contract = () => {


  return (
    <div>
      <Fragment>
        <PDFViewer className="w-full h-screen">
          <ContractPDF />
        </PDFViewer>
      </Fragment>
    </div>
  );
};
