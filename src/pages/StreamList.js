import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../actions/'
// import streams from '../apis/streams';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return(
        <div key={stream.id}>
          <img alt=""/>
          <div>
          {stream.title}
          <div>{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render () {
    // console.log(this.props.streams)
    return (
      <div>
        <h2>Streams</h2>
        <div>{this.renderList()}</div>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }
} 

export default connect(
  mapStateToProps, 
  { fetchStreams }
)(StreamList);