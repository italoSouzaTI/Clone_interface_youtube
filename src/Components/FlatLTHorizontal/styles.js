import styled from 'styled-components/native';

export const Container = styled.View`
  /* background: #c22; */
  width: 100%;
  height: 120px;
`;
export const ContainerFt = styled.View`
  /* background: #c22; */
  width: 100%;
  height: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FlatContainer = styled.View`
  padding: 0 10px;
  flex: 1;
  flex-direction: row;
`;

export const LineBottom = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #474747;
`;
export const FlatBag = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  align-items: center;
`;
export const Bag = styled.View`
  margin-top: 40px;
  margin-left: -13px;
  width: 15px;
  height: 15px;
  border-radius: 7px;
  border: 2px;
  border-color: #212121;
  background: #4d9ee3;
  margin-right: 20px;
`;
export const TxtBag = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  width: 70px;
  color: #848484;
  margin-top: 60px;
  margin-left: -80px;
  margin-right: 20px;
`;

export const FlatBtn = styled.TouchableOpacity`
  width: 80px;
  height: 100%;
  /* background: gray; */
  align-items: center;
  justify-content: center;
`;
export const TxtBtn = styled.Text`
  text-align: center;
  color: #57a2d8;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;
