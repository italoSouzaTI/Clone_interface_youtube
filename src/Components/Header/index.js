import React from 'react';
//Import icons
import IconsCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsFA from 'react-native-vector-icons/Foundation';
import IconsOC from 'react-native-vector-icons/Octicons';
//import IMG
import photo from '../../assets/user.jpg';
import logo from '../../assets/Logo.png';
//import Styled
import {
  Container,
  Header,
  ContainerLogo,
  ContainerBottom,
  HeaderItems,
  PhotoUser,
  Logo,
} from './styles';

const index = () => {
  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo source={logo} resizeMode="contain" />
        </ContainerLogo>
        <ContainerBottom>
          <HeaderItems>
            <IconsCI name="cast-connected" size={20} color="#fff" />
          </HeaderItems>
          <HeaderItems>
            <IconsFA name="video" size={20} color="#fff" />
          </HeaderItems>
          <HeaderItems>
            <IconsOC name="search" size={20} color="#fff" />
          </HeaderItems>
          <PhotoUser source={photo} />
        </ContainerBottom>
      </Header>
    </Container>
  );
};

export default index;
