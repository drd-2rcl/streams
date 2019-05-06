import React, { Component } from 'react';
import styled from 'styled-components';

import config from './env'

const { client_id } = config

const GoogleButton = styled.button`
  display: inline-block;
  background: white;
  color: #444;
  width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
  :hover {
    cursor: pointer;
  }
`;

const Icon = styled.label`
  background: url('/client/src/assets/btn_google_light_normal_ios.svg') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: auto;
  height: auto;
`

class GoogleAuth extends Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return <div>Loading ... </div>;
    } else if (this.state.isSignedIn) {
      return (
        <GoogleButton>
          <Icon />
          Sign Out
        </GoogleButton>
      )
    } else {
      return (
        <GoogleButton>
          <Icon />
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

export default GoogleAuth;