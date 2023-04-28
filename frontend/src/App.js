import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={WelcomePage} />
    </Router>
  );
}

export default App;
