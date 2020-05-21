import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: #c22; */
`;
export const FlatContainer = styled.View`
  padding: 0 10px;
  flex: 1;
  flex-direction: row;
`;
export const BtnFlat = styled.TouchableOpacity`
  background: #373737;
  min-width: 50px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 25px;
  padding: 10px;
  border: 2px;
  border-color: #474747;
`;
export const BtnFlatFinal = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const TxtBtn = styled.Text`
  color: ${(props) => props.colorTxt || '#fff'};
  font-size: 16px;1
`;
