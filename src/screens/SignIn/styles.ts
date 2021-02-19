import styled from 'styled-components/native';

interface SigninProps {
  margin?: string;
  color?: string;
  opacity?: number;
}

// export const Container = styled(LinearGradient).attrs({
//   colors: ['#1DE9B6', '#1DC4E9'],
//   useAngle: true,
//   angle: 225,
// })`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   padding: 0 40px;
// `;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 40px;
  background-color: #e5e5e5;
`;

export const Logo = styled.Image`
  width: 65px;
`;

export const Title = styled.Text<SigninProps>`
  margin: 25px 0;
  font-size: 40px;
  color: #383e71;
  /* font-family: ${({theme}) => theme.fonts.medium}; */
`;

export const SubTitle = styled.Text<SigninProps>`
  margin: 25px 0;
  font-size: 16px;
  color: #989fdb;
  line-height: 20px;
  /* font-family: ${({theme}) => theme.fonts.medium}; */
`;

export const TextButton = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #989fdb;
  /* font-family: ${({theme}) => theme.fonts.semiBold}; */
  align-self: center;
`;

export const TextAlert = styled.Text<SigninProps>`
  align-self: center;
  margin: 15px;
  font-size: 12px;
  opacity: 0.9;
  color: ${({color}) => color || '#FFF'};
  /* font-family: ${({theme}) => theme.fonts.extraBold}; */
`;
