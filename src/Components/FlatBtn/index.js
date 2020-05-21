import React from 'react';
import {FlatList} from 'react-native';

import {
  Container,
  FlatContainer,
  BtnFlat,
  TxtBtn,
  BtnFlatFinal,
} from './styles';

const items = [
  {
    id: String(Math.random()),
    name: 'Tudo',
  },
  {
    id: String(Math.random()),
    name: 'Hoje',
  },
  {
    id: String(Math.random()),
    name: 'Continuar assistindo',
  },
  {
    id: String(Math.random()),
    name: 'Não Assitidos',
  },
  {
    id: String(Math.random()),
    name: 'Ao vivo',
  },
  {
    id: String(Math.random()),
    name: 'Postagem',
  },
  {
    id: String(Math.random()),
    name: 'Configurações',
  },
];

const FlatBtn = () => {
  return (
    <>
      <Container>
        <FlatContainer>
          <FlatList
            data={items}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <>
                {item.name === 'Configurações' ? (
                  <BtnFlatFinal>
                    <TxtBtn colorTxt="#57a2d8">{item.name}</TxtBtn>
                  </BtnFlatFinal>
                ) : (
                  <BtnFlat>
                    <TxtBtn>{item.name}</TxtBtn>
                  </BtnFlat>
                )}
              </>
            )}
          />
        </FlatContainer>
      </Container>
    </>
  );
};

export default FlatBtn;
