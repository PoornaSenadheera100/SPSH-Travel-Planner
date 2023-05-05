import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import UserHome from "./components/UserHome";
import UserRequests from "./components/UserRequests";
import UserViewService from "./components/UserViewService";
import RequestDetails from "./components/RequestDetails";

function App() {
  return (
    <Router>
      <Header />
      {/* <Route path="/userHome" exact component={UserHome} /> */}
      <Route path="/" exact component={UserHome} />
      {/* <Route path="/userHome/requests/:id" exact component={UserRequests} /> */}
      <Route path="/userHome/requests/" exact component={UserRequests} />
      <Route
        path="/userHome/requests/view/"
        exact
        component={UserViewService}
      />
      {/* <Route path="/userHome/requests/view/" exact component={RequestDetails} /> */}
    </Router>
  );
}

export default App;
