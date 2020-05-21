import styled from 'styled-components/native';

export const Container = styled.View`
  background: #212121;
`;

export const Header = styled.View`
  width: 100%;
  height: 70px;
  background: #282828;
  flex-direction: row;
  align-items: center;
`;
export const ContainerLogo = styled.View`
  flex: 1;
  /* width: 100%;
  height: ; */
  /* background: red; */
  flex-direction: row;
  justify-content: flex-start;
`;
export const ContainerBottom = styled.View`
  flex: 2;
  /* background: blue; */
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const HeaderItems = styled.TouchableOpacity`
  margin-right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 110px;
  height: 25px;
  margin-left: 10px;
`;
export const PhotoUser = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  margin-left: 5px;
  margin-right: 5px;
`;
