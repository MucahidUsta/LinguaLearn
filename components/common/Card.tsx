import { View, StyleSheet, ViewStyle } from 'react-native';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  elevation?: number;
}

export default function Card({ children, style, elevation = 1 }: CardProps) {
  const getShadow = (elevation: number) => {
    return {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: elevation,
      },
      shadowOpacity: 0.1 + elevation * 0.03,
      shadowRadius: 1 + elevation,
      elevation: elevation,
    };
  };

  return (
    <View style={[styles.card, getShadow(elevation), style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    marginVertical: spacing.sm,
  },
});