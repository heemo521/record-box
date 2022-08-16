import React from "react";
import RecordItem from "./RecordItem";

export default function RecordCollection({ records }) {
  return (
    <div>
      <h5>Record Collection</h5>
      {records.length === 0 && <p>Empty List...</p>}
      <ul>
        {records.map((record) => (
          <RecordItem key={record.id}>{record.title}</RecordItem>
        ))}
      </ul>
    </div>
  );
}
