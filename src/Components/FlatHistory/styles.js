import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 240px;
  width: 100%;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #474747;
  padding-top: 15px;
  padding-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  width: 100%;
  margin-bottom: 10px;
`;

export const ContainerHistory = styled.View`
  width: 110px;
  height: 180px;
  flex-direction: row;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HistoryFLat = styled.Image`
  width: 100px;
  height: 150px;
  /* background: blue; */
  border-radius: 10px;
`;
export const BtnSetting = styled.TouchableOpacity`
  margin-left: -20px;
  margin-top: 10px;
`;

export const BorderUser = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: red;
  margin-left: -75px;
  margin-top: 78px;
  align-items: center;
  justify-content: center;
`;
export const BorderSubUser = styled.View`
  width: 54px;
  height: 54px;
  border-radius: 26px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;
export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 28px;
  background: #fff;
`;

export const LabelHistory = styled.Text`
  color: #efefef;
  font-size: 14px;
  width: 100px;
  text-align: center;
  margin-left: -80px;
  margin-top: 155px;
  /* background: red; */
`;
