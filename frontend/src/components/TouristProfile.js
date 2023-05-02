import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import profileBackground from '../images/profileBackground.jpg'

export default function TouristProfile() {
    const backgroundImageUrl = `url(${profileBackground})`;
    const style = {
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width <= 767;
    return (
        <div style={style}>
            <div className="container"
                 style={{margin: "auto", maxWidth: "500px", padding: "20px"}}>
                <div
                    style={{
                        border: "1px solid black",
                        padding: "100px",
                        textAlign: "justify",
                        borderRadius: "10px",
                        height: "600px",
                        width: "600px",
                        borderRadius: '50% 50% 0 0',
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                    }}>
                    <center><h1>User Profile</h1></center>
                    <form>
                        <label htmlFor="name" >Name</label>
                        <input type="text" id="name" class="form-control" placeholder="Enter your name"
                               pattern="[A-Za-z .]{1,100}" required onChange={(e) => {
                        }}/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="abc@gmail.com" required
                               onChange={(e) => {
                               }}/>

                        <label htmlFor="phone"> Phone</label>
                        <input type="phone" id="phone" class="form-control" placeholder="Phone No"
                               pattern="0[0-9]{9}" required onChange={(e) => {
                        }}/>

                        <label htmlFor="newpassword">New Password</label>
                        <input type="password" id="newpassword" class="form-control" placeholder="Password"
                               minLength="8" required onChange={(e) => {
                        }}/>

                        <label htmlFor="repassword">Re-enter Password</label>
                        <input type="password" id="repassword" class="form-control" placeholder="Password" required
                               onChange={(e) => {
                               }}/>
                        <br></br>
                        
                      <button type="button" class="btn btn-dark">Back</button>
                      <button type="button" class="btn btn-dark" style={{float:"right"}}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
