import React from 'react';
import {FlatList} from 'react-native';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import user1 from '../../assets/MT.jpg';
import user2 from '../../assets/Fds.jpg';
import user3 from '../../assets/Ftt.jpg';
import user4 from '../../assets/RT.jpg';
import IconsET from 'react-native-vector-icons/Entypo';

import {
  Container,
  Title,
  ContainerHistory,
  HistoryFLat,
  BtnSetting,
  BorderUser,
  BorderSubUser,
  Photo,
  LabelHistory,
} from './styles';

const items = [
  {
    Key: String(Math.random()),
    thumb: img1,
    photo: user1,
    name: 'Mateus silva',
  },
  {
    Key: String(Math.random()),
    thumb: img2,
    photo: user2,
    name: 'Filipe DeschampsDS',
  },
  {
    Key: String(Math.random()),
    thumb: img3,
    photo: user4,
    name: 'Rocketseat',
  },
  {
    Key: String(Math.random()),
    thumb: img4,
    photo: user3,
    name: 'Fluterando',
  },
];

const FlatHistory = () => {
  return (
    <Container>
      <Title>Histórias</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={items}
        keyExtractor={(item) => item.Key}
        renderItem={({item}) => (
          <>
            <ContainerHistory>
              <HistoryFLat source={item.thumb} />
              <BtnSetting>
                <IconsET
                  name="dots-three-vertical"
                  size={16}
                  color="#fff"
                  elevation={5}
                />
              </BtnSetting>
              <BorderUser>
                <BorderSubUser>
                  <Photo source={item.photo} />
                </BorderSubUser>
              </BorderUser>
              <LabelHistory>{item.name}</LabelHistory>
            </ContainerHistory>
          </>
        )}
      />
    </Container>
  );
};

export default FlatHistory;
