import React from "react";
import { Link } from "wouter";
import TableContents from ".@/components/tableContents";

const ErrorPage = () => {
  return (
    <>
      <p>Error</p>
      <TableContents />
      <p>Something has gone wrong and the page wasn't found.</p>
      <Link href="/">Go back to Home</Link>
    </>
  );
};

export default ErrorPage;
