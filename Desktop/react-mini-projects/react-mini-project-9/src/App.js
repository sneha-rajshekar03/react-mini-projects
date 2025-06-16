import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
import Sports from "./sports";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sports" component={Sports} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
