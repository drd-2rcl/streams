import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn, signOut } from './actions'

import IconGoogle from './assets/google-brands.svg'
import config from './env'

const { client_id } = config

const GoogleButton = styled.button`
  background: red;
  color: #fff;
  border: 1px solid #DDD;
  border-radius: 4px;
  font-size: 1rem;
  padding: 10px 15px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  color: #fff;
  padding-right: 7px;
`;

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return <div>Loading ... </div>;
    } else if (this.props.isSignedIn) {
      return (
        <GoogleButton onClick={this.onSignOutClick} >
          <Image src={IconGoogle} alt="Google"/>
          Sign Out
        </GoogleButton>
      )
    } else {
      return (
        <GoogleButton onClick={this.onSignInClick} >
          <Image src={IconGoogle} alt="Google"/>
          Sign In with Google
        </GoogleButton>
      )
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps, 
  { signIn, signOut }
)(GoogleAuth);