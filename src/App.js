import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="jumbotron">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/ProductList" component={ProductList} />
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
