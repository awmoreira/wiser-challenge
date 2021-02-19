import React from 'react';
import {ActivityIndicator} from 'react-native';

interface ILoadingIndicatorProps {
    color?: string;
    size?: number | 'small' | 'large' | undefined;
}

const LoadingIndicator: React.FC<ILoadingIndicatorProps> = ({
    size = 'small',
    color = '#000',
}) => <ActivityIndicator color={color} size={size} />;

export default LoadingIndicator;
