import { TextStyle } from 'react-native';

const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};

type TypographyStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
  fontWeight?: TextStyle['fontWeight'];
};

const typography: Record<string, TypographyStyle> = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 29,
  },
  h3: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 24,
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 22,
  },
  h5: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 20,
  },
  subtitle1: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 24,
  },
  subtitle2: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
  },
  body1: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 18,
  },
  overline: {
    fontFamily: fontFamily.medium,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 1.0,
    fontWeight: '500',
  },
};

export { fontFamily, typography };