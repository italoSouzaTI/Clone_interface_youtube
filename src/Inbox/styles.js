import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #242424;
`;

export const LinerNotification = styled.View`
  width: 100%;
  height: 80px;
  /* background: red; */
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export const BugNotif = styled.View`
  background: #4e9ee2;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 5px;
`;
export const PhotoNotif = styled.Image`
  background: #4e9ee2;
  width: 45px;
  height: 45px;
  border-radius: 23px;
`;

export const ContainerLabelNotif = styled.View`
  flex: 1;
  margin-left: 10px;
`;
export const TitleNotif = styled.Text`
  font-size: 12px;
  color: #e7e7e7;
  font-weight: bold;
`;

export const SubTitleNotif = styled.Text`
  font-size: 12px;
  color: #8f8f8f;
  font-weight: bold;
`;

export const ThumbNotif = styled.Image`
  /* background: #4e9ee2; */
  width: 90px;
  height: 45px;
`;
export const Outhers = styled.TouchableOpacity``;
