import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchStream, editStreams } from '../actions';
import StreamForm from './StreamForm';

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 20px;
  color: #000;
`

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Container>
          <h2>Edit a Stream</h2>
        </Container>
        <StreamForm
          initialValues={this.props.stream}
          onSubmit={this.onSubmit} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchStream, editStreams }
)(StreamEdit); 