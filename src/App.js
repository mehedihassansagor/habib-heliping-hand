import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
            <li>
              <Link to = "/home">Home 2</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
           <About/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route path = "/post/:id">
            <PostDetail></PostDetail>

          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
