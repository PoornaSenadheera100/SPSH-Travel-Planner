import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AddService from "./components/AddService";

function App() {
  return (
    <Router>
      <Header />
      <Route
        path="/sellerhome/service/add/"
        exact
        component={AddService}
      ></Route>
    </Router>
  );
}

export default App;
