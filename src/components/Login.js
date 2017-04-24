import React, { Component } from 'react';
import './Login.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import clientsecret from '../clientsecret.json';


class Login extends Component {

  responseGoogle = (res) => {
    //singin successfully
    if (res) {
      axios.post('http://localhost:8080/api/authenticate',{ idtoken : res.Zi.id_token})
      .then((res) => {
        if (res) {

          this.setState({isLoggedIn: true, user: res.data.user, idtoken: res.data.idtoken});
          this.props.callbackParent(this.state.isLoggedIn, this.state.user, this.state.idtoken);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  render(){
    return(
      <Grid fluid>
        <Row center='md'>
          <Col md={4}>
            <GoogleLogin
              clientId={clientsecret.web.client_id}
              buttonText="Login With Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Login;
