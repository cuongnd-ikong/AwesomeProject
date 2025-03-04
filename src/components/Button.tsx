import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  onPress?: () => void;
  title?: string;
  classButtom?: string;
  classText?: string;
  children: React.ReactNode;
};

export const Button = ({
  classButtom,
  title,
  onPress,
  classText,
  children,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity className={classButtom} onPress={onPress} {...rest}>
      {!!children ? children : <Text className={classText}>{title}</Text>}
    </TouchableOpacity>
  );
};
