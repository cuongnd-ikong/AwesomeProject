import { ReactNode } from 'react';
import { TextProps as TextPropsBase, TextStyle } from 'react-native';

export type TTextSize = number;
export type TTextColor = string;

export type TextProps = TextPropsBase & {
    children?: ReactNode | string;
    size?: TTextSize;
    color?: TTextColor;
    centerAlign?: boolean;
    lineHeight?: number;

    /* set font weight for text */
    regular?: boolean;
    bold?: boolean;
    medium?: boolean;
    semiBold?: boolean;

    /* text automatically translated by default, pass  disableTranslate = true to disable the translation feature*/
    disableTranslate?: boolean;
    underline?: boolean;

    /* text custom style */
    style?: TextStyle;
};
