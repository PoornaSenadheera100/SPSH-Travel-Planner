import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateForm from "./CreateForm";

export default function AdminHomePage() {
  const title = "test";
  return (
    <div className="container row">
      <div className="col-4">
        <button
          type="button"
          class="btn btn-success btn-lg"
          style={{ width: "90%", height: "30%" }}
        >
          Add Service Provider
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-primary btn-lg"
          style={{ width: "90%", height: "30%" }}
        >
          Manage Service Providers
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-warning btn-lg"
          style={{ width: "90%", height: "30%" }}
        >
          Manage Tourists
        </button>
      </div>
      <div className="col">
        <Router>
          <Route
            path="/admin/addserviceprovider"
            exact
            render={(props) => (
              <CreateForm {...props} title="Add Service Provider" />
            )}
          />
          {/* <Route path="/signup" exact component={SignupPage} /> */}
        </Router>
      </div>
    </div>
  );
}
