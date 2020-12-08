import logo from './logo.svg';
import './App.css';
import Informations from "./Informations";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/informations">Informations</Link>
              </li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/informations">
              <Informations />
            </Route>
            <Route path="/">
              <Helmet>
                <title>Prerender-Reactsnap</title>
              </Helmet>
              <p>
                Learn React
              </p>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
