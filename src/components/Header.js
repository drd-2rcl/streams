import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react'

import GoogleAuth from '../GoogleAuth';

const StyledHeader = styled.header`
border-bottom: 2px solid #000;
justify-content: space-around;
text-decoration: none;
align-items: center;
background: #fff;
font-weight: bold;
font-size: 1rem;
display: flex;
height: 50px;
flex-grow: 1;
color: #000;
width: 100%;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: #000;
`
const Row = styled.div`
flex-direction: row;
display: flex;
`;

const StyledDiv = styled.div`
margin: 5px;
`;

const Header = () => {
  return (
      <StyledHeader>
        <StyledDiv>
          <StyledLink to="/" >Streamer</StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink to="/" >All Streams</StyledLink>
        </StyledDiv>
        <Row>
          <StyledDiv>
            <GoogleAuth />
          </StyledDiv>
        </Row>
      </StyledHeader>
  )
}
export default Header;