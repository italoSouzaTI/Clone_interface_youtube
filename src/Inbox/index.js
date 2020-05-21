import React from 'react';
import {FlatList} from 'react-native';
import Header from '../Components/Header';

import tb1 from '../../src/assets/img1.jpg';
import tb2 from '../../src/assets/img2.jpg';
import tb3 from '../../src/assets/img3.jpg';
import tb4 from '../../src/assets/img4.jpg';
import prop1 from '../../src/assets/MT.jpg';
import prop2 from '../../src/assets/Fds.jpg';
import prop3 from '../../src/assets/RT.jpg';
import prop4 from '../../src/assets/Ftt.jpg';

import IconsET from 'react-native-vector-icons/Entypo';

import {
  Container,
  LinerNotification,
  BugNotif,
  PhotoNotif,
  ContainerLabelNotif,
  TitleNotif,
  SubTitleNotif,
  ThumbNotif,
  Outhers,
} from './styles';

const items = [
  {
    key: String(Math.random()),
    img: tb1,
    photoProp: prop1,
    Label: 'Clonando a interface do PicPay com React Native - Parte #02',
    subLabel: '4 semanas atrás',
  },
  {
    key: String(Math.random()),
    img: tb2,
    photoProp: prop2,
    Label:
      'Salários, Mercado de Trabalho e o Futuro da Programação (feat Rocketseat)',
    subLabel: '9 meses atrás',
  },
  {
    key: String(Math.random()),
    img: tb3,
    photoProp: prop3,

    Label: 'Prisma 2: Automatize o acesso ao banco de dados | Code/Drops #29',
    subLabel: '2 dias atrás',
  },
  {
    key: String(Math.random()),
    img: tb4,
    photoProp: prop4,
    Label:
      'Flutter mais popular que React Native, atualização do Slidy e flutter_modular com MobX',
    subLabel: '4 meses',
  },
  {
    key: String(Math.random()),
    img: tb1,
    photoProp: prop1,
    Label: 'Clonando a interface do PicPay com React Native - Parte #02',
    subLabel: '4 semanas atrás',
  },
  {
    key: String(Math.random()),
    img: tb2,
    photoProp: prop2,
    Label:
      'Salários, Mercado de Trabalho e o Futuro da Programação (feat Rocketseat)',
    subLabel: '9 meses atrás',
  },
  {
    key: String(Math.random()),
    img: tb3,
    photoProp: prop3,

    Label: 'Prisma 2: Automatize o acesso ao banco de dados | Code/Drops #29',
    subLabel: '2 dias atrás',
  },
  {
    key: String(Math.random()),
    img: tb4,
    photoProp: prop4,
    Label:
      'Flutter mais popular que React Native, atualização do Slidy e flutter_modular com MobX',
    subLabel: '4 meses',
  },
];

const Inbox = () => {
  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => <Header />}
        renderItem={({item}) => (
          <LinerNotification>
            <BugNotif />
            <PhotoNotif source={item.photoProp} />
            <ContainerLabelNotif>
              <TitleNotif>{item.Label}</TitleNotif>
              <SubTitleNotif>{item.subLabel}</SubTitleNotif>
            </ContainerLabelNotif>
            <ThumbNotif source={item.img} resizeMode="contain" />
            <Outhers>
              <IconsET name="dots-three-vertical" size={16} color="#8f8f8f" />
            </Outhers>
          </LinerNotification>
        )}
      />
    </Container>
  );
};

export default Inbox;
