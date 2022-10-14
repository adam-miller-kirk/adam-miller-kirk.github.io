import React from "react";
import { Link } from "wouter";
import "./TableContents.pcss";

const TableContents = () => {
  return (
    <div className="TableContents">
      <Link href="/">Home</Link>
      <Link href="/search">Search</Link>
      <Link href="/help">Help</Link>
    </div>
  );
};

export default TableContents;
