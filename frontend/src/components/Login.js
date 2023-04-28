import { useState } from "react";

export default function Login(props) {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  return (
    <div>
      <form>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      {props.title}
                      {props.subtitle}
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="abc@gmail.com"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          required
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>{" "}
                      {props.signupBtn}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
