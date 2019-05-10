import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
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
  margin: 10px 0 0 0;
`;

const Form = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  /* padding: 20px 0 20px 0; */
  /* margin-top: 10px; */
`;

const SytledDiv = styled.div`
  margin-top: 5px;
`;

const Paragraph = styled.p`
  color: #000;
  font-size: 0.7rem;
  padding: 0 0 10px 0;
  font-weight: bold;
  color: red;
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

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <Paragraph>{error}</Paragraph>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <SytledDiv>
          <Label>{label}</Label>
        </SytledDiv>
        <SytledDiv>
          <Input { ...input } autoComplete="off" />
        </SytledDiv>
        <SytledDiv>{this.renderError(meta)}</SytledDiv>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
