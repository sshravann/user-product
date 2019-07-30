import React from "react";
import { connect } from "react-redux";
import getActionLoginData from "../actions/LoginAction";
import { Link, Route } from "react-router-dom";
import ProductList from "../ProductList/index.js";

class Login extends React.Component {
  render() {
    // return template.call(this);
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form">
          <div className="form-group">
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              ref="uname"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              ref="pwd"
            />
          </div>

          <div className="form-group">
            <input
              type="button"
              className="btn btn-primary"
              onClick={this.handleLogin}
              value="Login"
            />
            <Route exact path="/ProductList" component={ProductList} />
            <Link to="/Register" className="btn btn-link">
              Register
            </Link>
          </div>
          {/* <Router>
            {" "}
            <Link to={`/Register`}>Signup?</Link>
            <Route exact path="/Register" component={Register} />
          </Router> */}
        </form>
      </div>
    );
  }

  handleLogin = () => {
    var obj = {
      username: this.refs.uname.value,
      password: this.refs.pwd.value
    };
    getActionLoginData(obj, this.props.dispatch);
    console.log("store data", this.props.info);
    this.props.history.push("/ProductList");
  };

  // handleSignup = () => {
  //   console.log("handle signup");
  //   return <Route path="/" component={Register} />;
  // };
}

function mapStateToProps(state) {
  return {
    info: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
