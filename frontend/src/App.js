import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import TouristProfile from "./components/TouristProfile";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Header} />
      <Route
        path="/tourist/view/userprofile"
        exact
        component={TouristProfile}
      />
    </Router>
  );
}

export default App;
