import React, { Component } from 'react'
import config from './env'

const { client_id } = config

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id,
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>
        Google Auth
      </div>
    )
  }
}

export default GoogleAuth;