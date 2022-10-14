import React from "react";

const ThirdPage = () => {
  const contactDetails = {
    phoneNumber: "07712345678",
    emailAddress: "email@email.com",
    address: "12, Somewhere Lane, BS22 1ST",
  };

  // TODO insert copy button next to email phone and address

  return (
    <>
      <div className="PageIntro">
        <h3>Help</h3>
        <p>
          If you are having trouble with this website we are ready to help.
          Please contact us using the details below:
        </p>
      </div>
      <div className="PageDetail">
        <p>
          <b>Phone Number:</b> {contactDetails.phoneNumber}
        </p>
        <p>
          <b>Email address:</b> {contactDetails.emailAddress}
        </p>
        <p>
          <b>Address:</b> {contactDetails.address}
        </p>
      </div>
    </>
  );
};

export default ThirdPage;
