import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Header from '../Components/Header';
import IconsET from 'react-native-vector-icons/Entypo';
import IconsMt from 'react-native-vector-icons/MaterialIcons';
import IconsFd from 'react-native-vector-icons/Foundation';
import IconsAt from 'react-native-vector-icons/AntDesign';
import IconsIC from 'react-native-vector-icons/Ionicons';

import tb1 from '../assets/img1.jpg';
import tb2 from '../assets/img2.jpg';
import tb3 from '../assets/img3.jpg';
import tb4 from '../assets/img4.jpg';

import {
  Container,
  ContainerFlat,
  FlatItem,
  ImgFlat,
  TimeRec,
  TextTime,
  ContainerTxt,
  ContainerColumn,
  TextFlat,
  SubtextFlat,
  Outhers,
  ContainerOption,
  Option,
  BtnOption,
  TxtOption,
  TxtSubOption,
  ContainerDu,
  ContainerPlayList,
  ContainerRow,
  PickerStyle,
  AddPlayList,
  TxtAdd,
} from './styles';

const items = [
  {
    key: String(Math.random()),
    img: tb1,
    Nome: 'Mateus Silva',
    Label: 'Clonando a interface do PicPay com React Native - Parte #02',
    time: '46:58',
  },
  {
    key: String(Math.random()),
    img: tb2,
    Nome: 'Filipe Deschamps',
    Label:
      'Salários, Mercado de Trabalho e o Futuro da Programação (feat Rocketseat)',
    time: '1:43:23',
  },
  {
    key: String(Math.random()),
    img: tb3,
    Nome: 'Rocketseat',
    Label: 'Prisma 2: Automatize o acesso ao banco de dados | Code/Drops #29',
    Label:
      'Flutter mais popular que React Native, atualização do Slidy e flutter_modular com MobX',
    time: '30:00',
  },
  {
    key: String(Math.random()),
    img: tb4,
    Nome: 'Fluterando',
    Label:
      'Flutter mais popular que React Native, atualização do Slidy e flutter_modular com MobX',
    time: '3:55',
  },
];

const Libery = () => {
  const [selectedValue, setSelectedValue] = useState('Adiconados recentemente');
  return (
    <Container>
      <Header />
      <ContainerFlat>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={items}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => (
            <>
              <FlatItem>
                <ImgFlat source={item.img} />
                <TimeRec>
                  <TextTime>{item.time}</TextTime>
                </TimeRec>
              </FlatItem>
              <ContainerTxt>
                <ContainerColumn>
                  <TextFlat>{item.Label}</TextFlat>
                  <SubtextFlat>{item.Nome}</SubtextFlat>
                </ContainerColumn>
                <Outhers>
                  <IconsET
                    name="dots-three-vertical"
                    size={12}
                    color="#8f8f8f"
                  />
                </Outhers>
              </ContainerTxt>
            </>
          )}
        />
      </ContainerFlat>
      <ContainerOption>
        <BtnOption>
          <Option>
            <IconsMt name="history" size={22} color="#fff" />
            <TxtOption>Histórico</TxtOption>
          </Option>
        </BtnOption>
        <BtnOption>
          <Option>
            <IconsFd name="play-video" size={26} color="#fff" />
            <TxtOption>Seus vídeos</TxtOption>
          </Option>
        </BtnOption>
        <BtnOption>
          <Option>
            <IconsAt name="clockcircle" size={22} color="#fff" />
            <ContainerDu>
              <TxtOption>Assistir mais tarde</TxtOption>
              <TxtSubOption> 5 vídeos não assistidos</TxtSubOption>
            </ContainerDu>
          </Option>
        </BtnOption>
      </ContainerOption>
      <ContainerPlayList>
        <ContainerRow>
          <TxtOption>Playlists</TxtOption>
          <PickerStyle
            selectedValue={selectedValue}
            iosIcon={<IconsIC name="ios-arrow-dropdown" />}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <PickerStyle.Item label="A-Z" value="A-Z" />
            <PickerStyle.Item
              label="Adiconados recentemente"
              value="Adiconados recentemente"
            />
          </PickerStyle>
        </ContainerRow>
        <AddPlayList>
          <IconsET name="plus" size={24} color="#5c98cd" />
          <TxtAdd>Nova playlist</TxtAdd>
        </AddPlayList>
      </ContainerPlayList>
    </Container>
  );
};

export default Libery;
