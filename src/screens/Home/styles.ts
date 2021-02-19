import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  useAngle: true,
  angle: 225,
})`
  flex: 1;
`;
