import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import SignupPage from "./components/SignupPage";
import AdminHomePage from "./components/AdminHomePage";
import ServiceProviderHomePage from "./components/ServiceProviderHomePage";
import TouristProfile from "./components/TouristProfile";
import UserHome from "./components/UserHome";
import UserRequests from "./components/UserRequests";
import UserViewService from "./components/UserViewService";
import AllServices from "./components/AllServices";
import SingleService from "./components/SingleService";
import AddServicePage from "./components/AddServicePage";
import UpdateServicePage from "./components/UpdateServicePage";
import MyServiceRequests from "./components/MyServiceRequests";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/admin/" component={AdminHomePage} />
      <Route path="/serviceprovider/" component={ServiceProviderHomePage} />
      <Route path="/tourist/userprofile" exact component={TouristProfile} />
      {/* <Route path="/userHome" exact component={UserHome} /> */}
      <Route path="/tourist" exact component={UserHome} />
      {/* <Route path="/userHome/requests/:id" exact component={UserRequests} /> */}
      <Route path="/tourist/requests/" exact component={UserRequests} />
      {/* Remove this and implement UserRequests component line 47 */}
      <Route
        path="/tourist/requests/view"
        exact
        component={UserViewService}
      />{" "}
      <Route
        path="/serviceprovider/add/"
        exact
        component={AddServicePage}
      ></Route>
      <Route
        path="/serviceprovider/update/:id"
        exact
        component={UpdateServicePage}
      ></Route>
      {/*<Route path="/service/update/:id" exact component={UpdateService}></Route>*/}
      <Route path="/serviceprovider" exact component={AllServices}></Route>
      <Route
        path="/serviceprovider/getservice/:id"
        exact
        component={SingleService}
      ></Route>
      <Route
        path="/serviceprovider/servicerequest/:id"
        exact
        component={MyServiceRequests}
      ></Route>
    </Router>
  );
}

export default App;
