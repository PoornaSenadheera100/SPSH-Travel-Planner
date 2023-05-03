import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AddService from "./components/AddService";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/service/add/" exact component={AddService}></Route>
      <Route path="/service" exact component={AllServices}></Route>
      <Footer />
    </Router>
  );
}

export default App;
