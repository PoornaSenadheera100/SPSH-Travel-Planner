import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateForm from "./CreateForm";
import Button from "react-bootstrap/Button";
import List from "./List";

export default function AdminHomePage() {
  if (sessionStorage.getItem("sTravPlaNimda") === null) {
    window.location.replace("/");
  }

  return (
    <div className="row" style={{ height: "100%" }}>
      <div style={{ width: "1px" }}>
        <p style={{ color: "white" }}>Invisible</p>
      </div>
      <div className="col-4">
        <a href="/admin/addserviceprovider">
          <button
            type="button"
            class="btn btn-success btn-lg"
            style={{ width: "90%", height: "30%" }}
          >
            Add Service Provider
          </button>
        </a>
        <br />
        <br />
        <a href="/admin/manageserviceproviders">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style={{ width: "90%", height: "30%" }}
          >
            Manage Service Providers
          </button>
        </a>
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
        <a
          href="/"
          style={{ float: "right" }}
          onClick={() => {
            sessionStorage.removeItem("sTravPlaNimda");
          }}
        >
          <Button variant="danger">Signout</Button>{" "}
        </a>

        <Router>
          <Route
            path="/admin/addserviceprovider"
            exact
            render={(props) => (
              <CreateForm {...props} title="Add Service Provider" />
            )}
          />

          <Route
            path="/admin/manageserviceproviders"
            exact
            render={(props) => (
              <List
                {...props}
                title="Manage Service Providers"
                getURL="http://localhost:8070/serviceprovider/"
                column1name="Name"
                viewURL=""
                updateURL=""
                deleteURL=""
                afterDeleteURL=""
              />
            )}
          />
        </Router>
      </div>
      <div style={{ width: "1px" }}>
        <p style={{ color: "white" }}>Invisible</p>
      </div>
    </div>
  );
}
