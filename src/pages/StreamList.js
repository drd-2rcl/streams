import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions/';
// import streams from '../apis/streams';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 20px;
`;

const Section = styled.section`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;
`;

const StyledDiv = styled.div`
  width: 90%;
`;


const Article = styled.article`
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 5px;
  padding: 40px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  color: #000;
  margin-top: 5px;
  line-height: 24px;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: 1px solid #DDD;
  border-radius: 4px;
  font-size: 1rem;
  padding: 10px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
`;


class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      ) 
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return(
        <Section key={stream.id}>
          <img alt=""/>
          <Article>
            <div>
              <strong>{stream.title}</strong>
              <Paragraph>{stream.description}</Paragraph>
              {this.renderAdmin(stream)}
            </div>
          </Article>
        </Section>
      )
    })
  }

  renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" >
            <Button>Create Stream</Button>
          </Link>
        </div>
      )
    }
  }

  render () {
    return (
      <Container>
        <h2>Streams</h2>
        <StyledDiv>{this.renderList()}</StyledDiv>
        {this.renderCreate()}
      </Container>
    )
  }
} 

const mapStateToProps = state => {
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
} 

export default connect(
  mapStateToProps, 
  { fetchStreams }
)(StreamList);