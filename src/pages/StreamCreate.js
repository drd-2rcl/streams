import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './StreamForm';

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 20px;
  color: #000;
`

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Container>
          <h2>Create a Stream</h2>
        </Container>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { createStream })(StreamCreate);

