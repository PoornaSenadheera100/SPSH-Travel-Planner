import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateForm from "./CreateForm";

export default function AdminHomePage() {
  const title = "test";
  return (
    <div className="container row">
      <div className="col-4">Buttons</div>
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
