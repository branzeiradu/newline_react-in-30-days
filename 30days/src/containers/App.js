import { React } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//load views from src/views folder
import Home from "./../views/Home.js";
import About from "./../views/About.js"

const App = props => {
    return (
        <Router>
            <Switch>
            <Route path="/about" component={About} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    );
};
export default App;