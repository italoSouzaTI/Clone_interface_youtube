import React from 'react';
import {FlatList} from 'react-native';

import user1 from '../../assets/MT.jpg';
import user2 from '../../assets/RT.jpg';
import user3 from '../../assets/Fds.jpg';

import {
  Container,
  ContainerFt,
  FlatContainer,
  FlatBag,
  Bag,
  TxtBag,
  FlatBtn,
  TxtBtn,
  LineBottom,
} from './styles';

const items = [
  {
    key: String(Math.random()),
    img: user1,
    name: 'Mateus Silva',
  },
  {
    key: String(Math.random()),
    img: user2,
    name: 'Rocketseat',
  },
  {
    key: String(Math.random()),
    img: user3,
    name: 'Filipe DeschampsDS',
  },
  {
    key: String(Math.random()),
    img: user1,
    name: 'Mateus Silva',
  },
  {
    key: String(Math.random()),
    img: user2,
    name: 'Rocketseat',
  },
  {
    key: String(Math.random()),
    img: user3,
    name: 'Filipe DeschampsDS',
  },
];

const FlatLTHorizontal = () => {
  return (
    <>
      <Container>
        <ContainerFt>
          <FlatContainer>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={items}
              keyExtractor={(item) => item.key}
              renderItem={({item}) => (
                <>
                  <FlatBag source={item.img} />
                  <Bag />
                  <TxtBag>{item.name}</TxtBag>
                </>
              )}
            />
          </FlatContainer>
          <FlatBtn>
            <TxtBtn>Todos</TxtBtn>
          </FlatBtn>
        </ContainerFt>
        <LineBottom />
      </Container>
    </>
  );
};

export default FlatLTHorizontal;
