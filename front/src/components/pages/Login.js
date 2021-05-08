import React from 'react';
import { root } from '../../constants'
import Form from "react-bootstrap/Form";

import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enable_message: false,
      message: ''
    }
    this.login = this.login.bind(this);
    this.grantAccess = this.grantAccess.bind(this);
  }

  login() {
    var http = new XMLHttpRequest();
    http.onload = function (e) {
      var response = JSON.parse(http.responseText);
      console.log(response);
      if(response['status'] === 'in'){
        document.cookie = "user=" + response['user'] + "; path=/";
        document.cookie = "token=" + response['token'] + "; path=/";
        window.location = '/';
      } else if (response['status'] === 'fail'){
        this.setState({
          enable_message: true,
          message: 'Incorrect User or Password'
        })
        setTimeout(function(){
          this.setState({
             enable_message: false
           });
        }.bind(this), 5000)
      }
    }.bind(this);
    http.open("GET", root + "api/user/login/");
    http.setRequestHeader('user', document.getElementById('user').value)
    http.setRequestHeader('pass', document.getElementById('password').value)
    http.send();
  }

  grantAccess() {
    var http = new XMLHttpRequest();
    http.onload = function (e) {
      if (http.responseText !== 'fail')
        window.location = http.responseText;
      else {
        this.setState({
          enable_message: true,
          message: 'Incorrect User or Password'
        })
        setTimeout(function(){
          this.setState({
             enable_message: false
           });
        }.bind(this), 5000)
      }
    }.bind(this);
    http.open("GET", root + "api/user/googleSync/");
    http.setRequestHeader('user', document.getElementById('user').value)
    http.setRequestHeader('pass', document.getElementById('password').value)
    http.send();
  }

  submit = (e) => {
    e.preventDefault()
    if(!window.location.href.includes('google')) {
      this.login()
    } else {
      this.grantAccess()
    }
  }

  render() {

    var message = '';
    if (this.state.enable_message){
      message = <div className="alert_message"> { this.state.message } </div>
    }

    return (
      <div className="login_form_container">
        { window.location.href.includes('google') ? <p>Google request access to Homeware-Lan</p> : '' }
        <br/>
        <Form onSubmit={this.submit.bind(this)}>
          <span className="login_element">Username</span>
          <input type="text" name="user" id="user"/>
          <span className="login_element">Password</span>
          <input type="password" name="password" id="password"/>
          <button type="submit" className="login_element">{ !window.location.href.includes('google') ? <span>Login</span> : <span>Grant access</span> }</button>
        </Form>
        <br/>
        { message }
      </div>
    );
  }
}

export default Login
