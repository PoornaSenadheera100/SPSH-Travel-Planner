import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import AddService from "./components/AddService";
import SingleService from "./components/SingleService";
import Slideshow from "./components/Slideshow";
import UpdateService from "./components/UpdateServices";
import AddServicePage from "./components/AddServicePage";
import UpdateServicePage from "./components/UpdateServicePage";

function App() {
  return (
    <Router>
      <Header />
      <Slideshow />
      <Route path="/service/add/" exact component={AddServicePage}></Route>
      <Route
        path="/service/update/:id"
        exact
        component={UpdateServicePage}
      ></Route>
      {/*<Route path="/service/update/:id" exact component={UpdateService}></Route>*/}
      <Route path="/service" exact component={AllServices}></Route>
      <Route
        path="/service/getservice/:id"
        exact
        component={SingleService}
      ></Route>
      <Footer />
    </Router>
  );
}

export default App;
