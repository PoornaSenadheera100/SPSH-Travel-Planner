import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateForm from "./CreateForm";

export default function AdminHomePage() {
  return (
    <div className="row">
      <div className="col-3">Buttons</div>
      <div className="col">
        <Router>
          <Route
            path="/admin/addserviceprovider"
            exact
            component={CreateForm}
          />
          {/* <Route path="/signup" exact component={SignupPage} /> */}
        </Router>
      </div>
      {/* <Router>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/signup" exact component={SignupPage} />
      </Router> */}
    </div>
  );
}
