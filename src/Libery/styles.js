import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #212121;
`;

export const ContainerFlat = styled.View`
  width: 100%;
  height: 180px;
  /* background: red; */
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #474747;
`;
export const FlatItem = styled.View`
  width: 160px;
  height: 100px;
  padding-bottom: 10px;
  margin-right: 10px;
  /* background: blue; */
`;
export const ImgFlat = styled.Image`
  width: 100%;
  height: 100%;
`;
export const TimeRec = styled.View`
  background: rgba(41, 40, 45, 0.8);
  width: 55px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: -25px;
  margin-left: 100px;
`;
export const TextTime = styled.Text`
  color: #fff;
  font-weight: normal;
`;
export const ContainerTxt = styled.View`
  flex: 1;
  flex-direction: row;
  width: 160px;
  height: 60px;

  margin-left: -170px;
  margin-top: 90px;
  margin-right: 10px;
`;
export const ContainerColumn = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const TextFlat = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})`
  color: #fff;
  margin-top: 5px;
`;

export const SubtextFlat = styled.Text`
  font-size: 12px;
  color: #5b5b5b;
  margin-top: 5px;
`;
export const Outhers = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const ContainerOption = styled.View`
  width: 100%;
  height: 170px;
  padding: 10px;

  border-bottom-width: 1px;
  border-color: #474747;
`;
export const Option = styled.View`
  flex-direction: row;
  align-items: center;

  /* background: red; */
  width: 100%;
  height: 40px;
`;
export const BtnOption = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const ContainerDu = styled.View`
  width: 100%;
  height: 40px;
`;
export const TxtOption = styled.Text`
  flex: 2;
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
  font-weight: 600;
`;
export const TxtSubOption = styled.Text`
  color: #9b9b9b;
  font-size: 12px;
  margin-left: 12px;
  font-weight: 200;
`;
export const ContainerPlayList = styled.View`
  flex: 1;
`;
export const ContainerRow = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30px;
  /* background: red; */
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const PickerStyle = styled.Picker.attrs({
  mode: 'dropdown',
})`
  flex: 1;
  color: #fff;
  background: transparent;
  align-items: center;
  justify-content: center;
`;
export const AddPlayList = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  /* background: red; */
  padding-left: 10px;
  align-items: center;
  flex-direction: row;
`;
export const TxtAdd = styled.Text`
  color: #5c98cd;
  font-size: 16px;
  margin-left: 12px;
  font-weight: 700;
`;
