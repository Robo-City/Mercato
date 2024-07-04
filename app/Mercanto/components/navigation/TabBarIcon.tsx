import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Or any other icon library you are using
import { useTheme } from '@react-navigation/native';

type TabBarIconProps = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  size?: number;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size = 24 }) => {
  const { colors } = useTheme();
  return <Ionicons name={name} size={size} color={color || colors.text} />;
};

export default TabBarIcon;
