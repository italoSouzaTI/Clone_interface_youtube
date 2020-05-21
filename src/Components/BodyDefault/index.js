import React from 'react';
import {FlatList} from 'react-native';
import IconsET from 'react-native-vector-icons/Entypo';
//import component
import Header from '../Header';
import FlatLTHorizontal from '../FlatLTHorizontal';
import FlatBtn from '../FlatBtn';
import FlatHistory from '../FlatHistory';

import {
  Container,
  ContainerVideo,
  Video,
  TimeRec,
  TextTime,
  ContainerData,
  UserPhoto,
  ContainerTxt,
  TitleVideo,
  Outhers,
  SubTitleVideo,
  LineView,
} from '../Body/styles';
import tb1 from '../../assets/img1.jpg';
import tb2 from '../../assets/img2.jpg';
import tb3 from '../../assets/img3.jpg';
import tb4 from '../../assets/img4.jpg';
import prop1 from '../../assets/MT.jpg';
import prop2 from '../../assets/Fds.jpg';
import prop3 from '../../assets/RT.jpg';
import prop4 from '../../assets/Ftt.jpg';
const items = [
  {
    key: String(Math.random()),
    img: tb1,
    photoProp: prop1,
    Nome: 'Mateus Silva',
    time: '46:58',
    Label: 'Clonando a interface do PicPay com React Native - Parte #02',
    subLabel: 'Mateus Silva . 2,2 mil visualizações . 4 semanas atrás',
  },
  {
    key: String(Math.random()),
    img: tb2,
    photoProp: prop2,
    Nome: 'Filipe Deschamps',
    time: '1:43:23',
    Label:
      'Salários, Mercado de Trabalho e o Futuro da Programação (feat Rocketseat)',
    subLabel: 'Filipe Deschamps . 88.633 visualizações . 9 meses atrás',
  },
  {
    key: String(Math.random()),
    img: tb3,
    photoProp: prop3,
    Nome: 'Rocketseat',
    time: '30:00',
    Label: 'Prisma 2: Automatize o acesso ao banco de dados | Code/Drops #29',
    subLabel: 'Rocketseat . 10.591 visualizações . 2 dias atrás',
  },
  {
    key: String(Math.random()),
    img: tb4,
    photoProp: prop4,
    Nome: 'Fluterando',
    time: '3:55',
    Label:
      'Flutter mais popular que React Native, atualização do Slidy e flutter_modular com MobX',
    subLabel: 'Fluterando . 2,4 mil visualizações há 4 meses',
  },
];

const BodyDefault = () => {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => (
          <>
            <Header />
            <FlatLTHorizontal />
            <FlatBtn />
            <FlatHistory />
          </>
        )}
        renderItem={({item}) => (
          <>
            <ContainerVideo key={String(item.key)}>
              <Video source={item.img} resizeMode="contain" />
              <TimeRec>
                <TextTime>{item.time}</TextTime>
              </TimeRec>
            </ContainerVideo>
            <ContainerData>
              <UserPhoto source={item.photoProp} />
              <ContainerTxt>
                <TitleVideo>{item.Label}</TitleVideo>
                <SubTitleVideo>{item.subLabel}</SubTitleVideo>
              </ContainerTxt>
              <Outhers>
                <IconsET name="dots-three-vertical" size={12} color="#8f8f8f" />
              </Outhers>
            </ContainerData>
          </>
        )}
        ItemSeparatorComponent={() => <LineView />}
      />
    </Container>
  );
};

export default BodyDefault;
