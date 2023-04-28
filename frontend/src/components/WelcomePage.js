import Login from "./Login";

export default function WelcomePage() {
  const travellerLoginTitle = (
    <h2 className="fw-bold mb-2 text-uppercase">SPSH Travel Planner</h2>
  );

  const providerLoginTitle = (
    <>
      <h2 className="fw-bold mb-2 text-uppercase">Service Provider</h2>
      <br />
    </>
  );

  const travellerLoginSubTitle = (
    <p className="text-white-50 mb-5">Please enter your email and password!</p>
  );

  const signupBtn = (
    <p className="mb-0">
      <br />
      <br />
      Create a new account <br />
      <a href="/buyersignup" className="btn btn-outline-light btn-lg px-5">
        Sign Up
      </a>
    </p>
  );

  const travellerFormWidth = "60%";

  return (
    <div>
      <div style={{ float: "right" }}>
        <Login title={providerLoginTitle} formWidth="90%" />
      </div>

      <div style={{ float: "right", width: "50%" }}>
        <center>
          <Login
            title={travellerLoginTitle}
            subtitle={travellerLoginSubTitle}
            signupBtn={signupBtn}
            formWidth={travellerFormWidth}
          />
        </center>
      </div>
      <div style={{ float: "right", width: "30%" }}>
        <p style={{ color: "white" }}>Invisible</p>
      </div>
    </div>
  );
}
