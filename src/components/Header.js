import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
width: 100%;
height: 10vh;
background: #000;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1rem;
font-weight: bold;
color: #fff;
flex-grow: 1;
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
          <Link to="/" >Streamer</Link>
        </StyledDiv>
        <StyledDiv>
        </StyledDiv>
        <Row>
          <StyledDiv>
            <Link to="/" >Streamer</Link>
          </StyledDiv>
          <StyledDiv>
            <Link to="/" >Streamer</Link>
          </StyledDiv>
        </Row>
      </StyledHeader>
  )
}
export default Header;