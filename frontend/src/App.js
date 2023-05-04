import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import SignupPage from "./components/SignupPage";
import AdminHomePage from "./components/AdminHomePage";
import ServiceProviderHomePage from "./components/ServiceProviderHomePage";
import TouristProfile from "./components/TouristProfile";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/admin/" component={AdminHomePage} />
      <Route path="/serviceprovider/" component={ServiceProviderHomePage} />

      <Route
        path="/tourist/view/userprofile"
        exact
        component={TouristProfile}
      />
    </Router>
  );
}

export default App;
