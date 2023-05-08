import { useState } from "react";
import CreateForm from "./CreateForm";

export default function TouristProfileUpdatePage(){

  const pwdChangeWarning = <><br></br><h4>Leave the below fields blank if you do not want to change the password</h4></>

  // const [name,setName]=useState("");
  // const [email,setEmail]=useState(""); //This i should not allow to update neda
  // const [nic,setNic]=useState("");
  // const [phone,setPhone]=useState("");
  // const [newpassword,setNewPassword]=useState("");
  // const[password,password]=useState("");



//Function to update the data
  // function updateProfile(e) {
  //   e.preventDefault();

  //   const newTourist = {
  //     name,
  //     address,
  //     nic,
  //     phone,
  //     email,
  //     password,
  //   };
  //   axios
  //     .put(`http://localhost:8070/tourist/update/${email}`, newTourist)
  //     .then(() => {
  //       alert("Profile updated");
  //       window.location.replace("http://localhost:3000/tourist/");
  //     })
  //     .catch((err) => {
  //       alert("Update failure occured ! ");
  //     });
  

    return(<div className="container">

        <CreateForm title='Update tourist profile' getURL='http://localhost:8070/tourist/get/email' pwdChangeWarning={pwdChangeWarning}/>

    </div>)

}