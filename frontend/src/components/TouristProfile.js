import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
export default function TouristProfile(){
   

    return(
      <div>
        
     
        <div className="container"style={{ margin: "auto", maxWidth: "500px", padding: "20px" }}>
            
            
            <center><h1>User Profile</h1></center>

            <div
          style={{
            border: "1px solid black",
            padding: "10px",
            textAlign: "justify",
            borderRadius: "10px",
            height: "200px",
          }}
        >
          <center>
            <br></br>
            <table>
              <tr>
                <td style={{ width: "200px" }}> <b>Name</b></td>

                <td style={{ width: "200px" }}>:</td>

                
              </tr>

              <tr></tr>

              <tr></tr>
              <tr>
                <td><b>Email</b> </td>
                <td>:</td>
                
              </tr>
              <tr></tr>
              <tr>
                <td><b>Phone</b> </td>
                <td>:</td>
                
              </tr>
              <tr>
                <td><b>Delivery Charge</b> </td>
                <td>:</td>
               
              </tr>
            </table>
          </center>
        </div>
        </div>
        </div>
    )
}