import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Welcome home</h2>
    <Link to="/about">Go to about</Link>
  </div>
);


/*
const About = () => (
  <div>
    <h2> About </h2>
    <Link to="/">Go home</Link>
  </div>
);
*/

const About = ({ name }) => (
  <div>
    <h1>About {name}</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact={true} render={
              renderProps => (
                <div>
                  <Home {...this.props} {...renderProps} />
                </div>
              )
            } />


            <Route path="/about" render={renderProps => (
              <div>
                <Link to="/about/ari">Ari</Link>
                <Link to="/about/nate">Nate</Link>
                <About name={renderProps.match.params.name} />
                <Link to="/">Go home</Link>
              </div>
            )} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;