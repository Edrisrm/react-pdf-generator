import { Fragment } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ContractPDF from "./components/pdf-generator/ContractPDF";

function App() {
  return (
    <div className="App">
      <div>
        <Fragment>
          <PDFViewer style={{ width: "100%", height: "100vh"}}>
            <ContractPDF />
          </PDFViewer>
        </Fragment>
      </div>
    </div>
  );
}

export default App;
