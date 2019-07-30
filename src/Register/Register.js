import React from "react";
import { connect } from "react-redux";
import getActionRegData from "../actions/RegisterAction";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Registration</h2>
        <form name="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              ref="uname"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              ref="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              ref="pwd"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              onClick={this.handleRegister}
              value="Register"
            />
            <Link to="/" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }

  handleRegister = () => {
    var obj = {
      username: this.refs.uname.value,
      email: this.refs.email.value,
      password: this.refs.pwd.value
    };
    getActionRegData(obj, this.props.dispatch);
    console.log("store data", this.props.info);
  };
}

function mapStateToProps(state) {
  return {
    info: state.Regdata
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
)(Register);
