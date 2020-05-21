import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #212121;
`;

export const ContainerCategory = styled.View`
  width: 100%;
  height: 190px;
  padding: 15px;
  /* background: red; */
  border-bottom-width: 1px;
  border-color: #323232;
  flex-flow: row wrap;
  justify-content: space-between;
`;
export const CategoryBtn = styled.TouchableOpacity`
  width: 160px;
  height: 45px;
  border-radius: 10px;
  align-items: center;
  padding-left: 8px;
  background: ${(props) => props.BgColor || '#F07e35'};
  margin-bottom: 10px;
  flex-direction: row;
`;
export const TxtBtn = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  padding-left: 5px;
`;
export const HeaderUp = styled.View`
  width: 100%;
  height: 70px;
  background: #242424;
  justify-content: center;
  padding-left: 10px;
`;
export const TxtHeader = styled.Text`
  font-size: 16px;
  color: #fff;
  padding-left: 5px;
`;
export const ContainerVideo = styled.View`
  width: 100%;
  height: 200px;
  /* background: red; */
  border-top-width: 1px;
  border-color: #2d2d2d;
`;
export const Video = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 203px;
`;

export const TimeRec = styled.View`
  background: rgba(41, 40, 45, 0.5);
  width: 55px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: -30px;
  margin-left: 298px;
`;
export const TextTime = styled.Text`
  color: #fff;
  font-weight: normal;
`;
export const ContainerData = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  margin-top: 10px;
`;
export const UserPhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export const ContainerTxt = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;
export const TitleVideo = styled.Text`
  font-size: 16px;
  color: #e7e7e7;
  font-weight: bold;
`;
export const SubTitleVideo = styled.Text`
  font-size: 12px;
  color: #8f8f8f;
  font-weight: bold;
`;
export const Outhers = styled.TouchableOpacity``;
