import styled from 'styled-components/native';

export const Container = styled.View`
  /* background: red; */
  flex: 1;
  background: #212121;
`;
export const ContainerVideo = styled.View`
  width: 100%;
  height: 300px;
`;
export const Video = styled.Image`
  margin-top: -80px;
  width: 100%;
  height: 412px;
`;
export const TimeRec = styled.View`
  background: rgba(41, 40, 45, 0.5);
  width: 55px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: -130px;
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
  margin-top: -73px;
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

export const LineView = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #313131;
`;
