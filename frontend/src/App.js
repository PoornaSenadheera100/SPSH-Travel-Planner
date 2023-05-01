import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Header from './components/Header';
import UserHome from './components/UserHome';

function App() {
  return (
    <Router>
      <Header/>
      <Route path='/userHome' exact component={UserHome}/>
    </Router>
  );
}

export default App;
