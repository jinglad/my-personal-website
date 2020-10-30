import './App.css';
import Home from './Components/Home/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio/Portfolio';
import Notfound from './Components/Notfound/Notfound';
import { createContext, useState } from 'react';
import PortfolioItemDetails from './Components/Portfolio/PortfolioItemDetails/PortfolioItemDetails';
import Resume from './Components/Resume/Resume/Resume';
import ContactMe from './Components/ContactMe/ContactMe';
import Blogs from './Components/Blogs/Blogs/Blogs';

export const projectContext = createContext();

function App() {
  const [project, setProject] = useState({});
  return (
    <projectContext.Provider value={[project, setProject]}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route path="/portfolioItemDetails">
              <PortfolioItemDetails></PortfolioItemDetails>
            </Route>
            <Route path="/resume">
              <Resume></Resume>
            </Route>
            <Route path="/contact-me">
              <ContactMe></ContactMe>
            </Route>
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </div>
      </Router>
    </projectContext.Provider>
  );
}

export default App;
