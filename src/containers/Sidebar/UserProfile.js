import React, {Component} from "react";
import {connect} from "react-redux";
import {Avatar, Popover} from "antd";
import {userSignOut} from "appRedux/actions/Auth";
import jwt_decode from 'jwt-decode';

class UserProfile extends Component {

  constructor(){
    super();
    this.state = {
        name: '',
        email: ''
    }
}

componentDidMount(){

    const token = localStorage.token;
    const decoded = jwt_decode(token);
    this.setState({
        name: decoded.name,
        email: decoded.email
    });
}

  render() {

    const userMenuOptions = (
      <ul className="gx-user-popover">
        <li>My Account</li>
        <li>Connections</li>
        <li onClick={() => this.props.userSignOut()}>Logout
        </li>
      </ul>
    );

    return (

      <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
        <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
          <Avatar src={require("assets/images/avatar.png")}
                  className="gx-size-40 gx-pointer gx-mr-3" alt=""/>
          <span className="gx-avatar-name">{this.state.name}<i
            className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
        </Popover>
      </div>

    )

  }
}

const mapStateToProps = ({auth}) => {
  const {authUser} = auth;
  return {authUser}
};

export default connect(mapStateToProps, {userSignOut})(UserProfile);
