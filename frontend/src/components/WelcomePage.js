import Login from "./Login";

export default function WelcomePage() {
  const travellerLoginTitle = (
    <h2 className="fw-bold mb-2 text-uppercase">SPSH Travel Planner</h2>
  );

  const providerLoginTitle = (
    <h2 className="fw-bold mb-2 text-uppercase">Service Provider</h2>
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

  return (
    <div>
      <Login
        title={travellerLoginTitle}
        subtitle={travellerLoginSubTitle}
        signupBtn={signupBtn}
      />

      <Login title={providerLoginTitle} />
    </div>
  );
}
