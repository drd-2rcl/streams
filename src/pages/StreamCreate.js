import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const Container = styled.div`
justify-content: center;
align-items: center;
display: flex;
height: 50vh;
color: #000;
`

const Input = styled.input`
  height: 48px;
  border: 1px solid #DDD;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0 20px;
  margin: 10px 0;
`;

const Form = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
`;

class StreamCreate extends Component {
  renderInput({ input }) {
    return <Input { ...input } />
  }

  render() {
    return (
      <Container>
        <Form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </Form>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
