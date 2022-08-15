import React from "react";
import RecordItem from "./RecordItem";

export default function RecordCollection({ records }) {
  return (
    <div>
      <h1>Record List</h1>
      <ul>
        {records.map((record) => (
          <RecordItem key={record.id}>{record.title}</RecordItem>
        ))}
      </ul>
    </div>
  );
}
