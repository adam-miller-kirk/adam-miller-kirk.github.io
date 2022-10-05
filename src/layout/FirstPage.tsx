import React from "react";
import { Link } from "wouter";

const FirstPage = () => {
  return (
    <>
      <p>Welcome Page</p>
      <p>First Page</p>
      <Link href="/second">Go to second page</Link>
    </>
  );
};

export default FirstPage;
