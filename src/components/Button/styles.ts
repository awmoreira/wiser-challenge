import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface IContainerProps {
    type: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    paddingBottom: boolean;
}

const borderColor = {
    primary: 'none',
    secondary: '1px solid #aaaeb3',
    tertiary: 'none',
    quaternary: '1px solid #eb5757',
};

interface IBackgroundProps {
    size: 'large' | 'medium';
}
export const Background = styled(LinearGradient).attrs({
    useAngle: true,
    angle: 225,
})<IBackgroundProps>`
    height: 48px;
    width: ${({size}) => (size === 'large' ? '100%' : '48%')};
    border-radius: 8px;
`;
export const Container = styled.TouchableOpacity<IContainerProps>`
    flex: 1;
    width: 100%;
    height: 42px;
    padding: 0px 10px;
    padding-bottom: ${({theme, paddingBottom}) =>
        paddingBottom ? theme.metrics.marginBottom : 0}px;
    border: ${({type}) => borderColor[type] || 'none'};
    border-radius: 21px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

export const WrapperButton = styled.View`
    shadow-color: #d8afe5;
    shadow-offset: 0px 10px;
    shadow-opacity: 0.8;
    shadow-radius: 8px;
    elevation: 2;
`;
export const WrapperDescription = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0px 10px;
`;

interface IDescriptionProps {
    fontsize: number;
    type: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const textColor = {
    primary: '#fff',
    secondary: '#393C40',
    tertiary: '#1dc4e9',
    quaternary: '#eb5757',
};
export const Description = styled.Text<IDescriptionProps>`
    font-size: ${({theme, fontsize}) =>
        theme.metrics.screenWidth < 375 ? fontsize : fontsize + 2}px;
    font-weight: bold;
    color: ${({type}) => textColor[type]};
    text-align: center;
    text-transform: uppercase;
    margin: 0px 10px;
`;
