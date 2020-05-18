import React from 'react';
// import Components
import Header from '../Components/Header';
import Body from '../Components/Body';
// import styles
import {Container, ContainerScroll} from './styles';
const Start = () => {
  return (
    <Container>
      <ContainerScroll>
        <Header />
        <Body />
      </ContainerScroll>
    </Container>
  );
};

export default Start;
