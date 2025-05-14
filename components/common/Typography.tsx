import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import { typography } from '@/constants/typography';
import colors from '@/constants/colors';

interface TypographyProps extends TextProps {
  variant?: keyof typeof typography;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'body1',
  color = colors.neutral[800],
  align = 'left',
  style,
  children,
  ...props
}: TypographyProps) {
  return (
    <Text
      style={[
        styles[variant],
        { color, textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: typography.h1.fontFamily,
    fontSize: typography.h1.fontSize,
    lineHeight: typography.h1.lineHeight,
    letterSpacing: typography.h1.letterSpacing,
  },
  h2: {
    fontFamily: typography.h2.fontFamily,
    fontSize: typography.h2.fontSize,
    lineHeight: typography.h2.lineHeight,
  },
  h3: {
    fontFamily: typography.h3.fontFamily,
    fontSize: typography.h3.fontSize,
    lineHeight: typography.h3.lineHeight,
  },
  h4: {
    fontFamily: typography.h4.fontFamily,
    fontSize: typography.h4.fontSize,
    lineHeight: typography.h4.lineHeight,
  },
  h5: {
    fontFamily: typography.h5.fontFamily,
    fontSize: typography.h5.fontSize,
    lineHeight: typography.h5.lineHeight,
  },
  subtitle1: {
    fontFamily: typography.subtitle1.fontFamily,
    fontSize: typography.subtitle1.fontSize,
    lineHeight: typography.subtitle1.lineHeight,
  },
  subtitle2: {
    fontFamily: typography.subtitle2.fontFamily,
    fontSize: typography.subtitle2.fontSize,
    lineHeight: typography.subtitle2.lineHeight,
  },
  body1: {
    fontFamily: typography.body1.fontFamily,
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
  },
  body2: {
    fontFamily: typography.body2.fontFamily,
    fontSize: typography.body2.fontSize,
    lineHeight: typography.body2.lineHeight,
  },
  button: {
    fontFamily: typography.button.fontFamily,
    fontSize: typography.button.fontSize,
    lineHeight: typography.button.lineHeight,
    letterSpacing: typography.button.letterSpacing,
  },
  caption: {
    fontFamily: typography.caption.fontFamily,
    fontSize: typography.caption.fontSize,
    lineHeight: typography.caption.lineHeight,
  },
  overline: {
    fontFamily: typography.overline.fontFamily,
    fontSize: typography.overline.fontSize,
    lineHeight: typography.overline.lineHeight,
    letterSpacing: typography.overline.letterSpacing,
    fontWeight: typography.overline.fontWeight,
  },
});