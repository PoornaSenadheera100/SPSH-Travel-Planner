import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateForm from "./CreateForm";
import Button from "react-bootstrap/Button";
import List from "./List";
import ViewUser from "./ViewUser";

export default function AdminHomePage() {
  if (sessionStorage.getItem("sTravPlaNimda") === null) {
    window.location.replace("/");
  }

  const pwdChangeWarning = (
    <>
      <br />
      <h4>
        Leave the fields below blank if you do not want to change the password!
      </h4>
    </>
  );

  return (
    <div className="row" style={{ height: "100%" }}>
      <div style={{ width: "1px" }}>
        <p style={{ color: "white" }}>Invisible</p>
      </div>
      <div className="col-4">
        <a href="/admin/managerequests">
          <button
            type="button"
            class="btn btn-info btn-lg"
            style={{ width: "90%", height: "17%" }}
          >
            Manage Requests
          </button>
        </a>
        <br />
        <br />
        <a href="/admin/addserviceprovider">
          <button
            type="button"
            class="btn btn-success btn-lg"
            style={{ width: "90%", height: "17%" }}
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
            style={{ width: "90%", height: "17%" }}
          >
            Manage Service Providers
          </button>
        </a>
        <br />
        <br />
        <a href="/admin/managetourists">
          <button
            type="button"
            class="btn btn-warning btn-lg"
            style={{ width: "90%", height: "17%" }}
          >
            Manage Tourists
          </button>
        </a>
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

        {/* Add a Service Provider */}
        <Router>
          <Route
            path="/admin/addserviceprovider"
            exact
            render={(props) => (
              <CreateForm
                {...props}
                title="Add Service Provider"
                backBtnURL="/admin/addserviceprovider"
              />
            )}
          />

          {/* Manage Service Providers */}
          <Route
            path="/admin/manageserviceproviders"
            exact
            render={(props) => (
              <List
                {...props}
                title="Manage Service Providers"
                // getURL="http://localhost:8070/serviceprovider/"
                getURL="https://spsh-travel-planner-backend.onrender.com/serviceprovider/"
                viewURL="/admin/manageserviceproviders/view"
                updateURL="/admin/manageserviceproviders/update"
                deleteURL="https://spsh-travel-planner-backend.onrender.com/serviceprovider/delete/email"
                afterDeleteURL="/admin/manageserviceproviders"
                deleteMsg="Service Provider Deleted"
              />
            )}
          />

          {/* View a Service Provider */}
          <Route
            path="/admin/manageserviceproviders/view/:email"
            exact
            render={(props) => (
              <ViewUser
                {...props}
                title="Service Provider"
                // getURL="http://localhost:8070/serviceprovider/"
                getURL="https://spsh-travel-planner-backend.onrender.com/serviceprovider/get/email"
                backBtnURL="/admin/manageserviceproviders"
              />
            )}
          />

          {/* Update a Service Provider */}
          <Route
            path="/admin/manageserviceproviders/update/:email"
            exact
            render={(props) => (
              <CreateForm
                {...props}
                title="Update Service Provider"
                pwdChangeWarning={pwdChangeWarning}
                getURL="https://spsh-travel-planner-backend.onrender.com/serviceprovider/get/email"
                backBtnURL="/admin/manageserviceproviders"
              />
            )}
          />

          {/* Manage tourists */}
          <Route
            path="/admin/managetourists"
            exact
            render={(props) => (
              <List
                {...props}
                title="Manage Tourists"
                // getURL="http://localhost:8070/tourists/"
                getURL="https://spsh-travel-planner-backend.onrender.com/tourist/"
                viewURL="/admin/managetourists/view"
                updateURL="/admin/managetourists/update"
                deleteURL="https://spsh-travel-planner-backend.onrender.com/tourist/delete/email"
                afterDeleteURL="/admin/managetourists"
                deleteMsg="Tourist Deleted"
              />
            )}
          />

          {/* View a Tourist */}
          <Route
            path="/admin/managetourists/view/:email"
            exact
            render={(props) => (
              <ViewUser
                {...props}
                title="Tourist"
                // getURL="http://localhost:8070/serviceprovider/"
                getURL="https://spsh-travel-planner-backend.onrender.com/tourist/get/email"
                backBtnURL="/admin/managetourists"
              />
            )}
          />

          {/* Update a Tourist */}
          <Route
            path="/admin/managetourists/update/:email"
            exact
            render={(props) => (
              <CreateForm
                {...props}
                title="Update Tourist"
                pwdChangeWarning={pwdChangeWarning}
                getURL="https://spsh-travel-planner-backend.onrender.com/tourist/get/email"
                backBtnURL="/admin/managetourists"
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
