import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/signup" exact component={SignupPage} />
    </Router>
  );
}

export default App;
