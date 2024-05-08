/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowRight from '../../assets/icons/arrow-right';
import {COLORS, FONTS} from '../../constant';
interface Props {
  placeholder: string;
  type: 'Fill' | 'Outline';
  RightArrow?: boolean;
  onPress?: any;
}

const SignButton = ({
  RightArrow,
  placeholder,
  type = 'Fill',
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.base, styles[type]]}>
      <Text
        style={[
          styles.textButton,
          type === 'Fill' ? {color: 'white'} : {color: COLORS.primary},
        ]}>
        {placeholder}
      </Text>
      {RightArrow && <ArrowRight />}
    </TouchableOpacity>
  );
};

export default SignButton;

const styles = StyleSheet.create({
  base: {
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Fill: {
    backgroundColor: COLORS.primary,
  },
  Outline: {
    backgroundColor: 'transparent',
  },
  textButton: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    marginBottom: 2,
  },
});
