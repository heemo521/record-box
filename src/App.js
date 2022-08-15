import React, { useState } from "react";
import RecordCollection from "./features/RecordCollection";
import UploadImage from "./features/UploadImage";

function App() {
  const [records, setRecords] = useState([]);
  return (
    <div className="App">
      <UploadImage />
      <RecordCollection records={records} />
    </div>
  );
}

export default App;
