import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../styles';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(50deg, #07151e -1%, #07151e 0%, #0e222f);
  color: #fff;
`;
const Title = styled.h1`
  font-size: 3em;
`;

class LandingPage extends Component {
  auth () {
    console.log('authenticating');
  }

  render() {
    return (
      <Wrapper>
        <Title>Standup Notes</Title>
        <Button onClick={this.auth}>Log In</Button>
      </Wrapper>
    );
  }
}

export default LandingPage;
