import { useState } from "react";
import CreateForm from "./CreateForm";

export default function TouristProfileUpdatePage() {
  const pwdChangeWarning = (
    <>
      <br></br>
      <h4>
        Leave the below fields blank if you do not want to change the password
      </h4>
    </>
  );

  return (
    <div className="container">
      <CreateForm
        title="Update tourist profile"
        // getURL="http://localhost:8070/tourist/get/email"
        getURL="https://spsh-travel-planner-backend.onrender.com/tourist/get/email"
        pwdChangeWarning={pwdChangeWarning}
        disableEmail="true"
        backBtnURL="/tourist/userprofile"
      />
    </div>
  );
}
