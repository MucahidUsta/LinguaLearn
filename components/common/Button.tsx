import { 
  TouchableOpacity, 
  StyleSheet, 
  View, 
  TouchableOpacityProps,
  ActivityIndicator,
  ViewStyle
} from 'react-native';
import Typography from './Typography';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: ViewStyle;
}

export default function Button({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  startIcon,
  endIcon,
  style,
  disabled,
  ...props
}: ButtonProps) {
  // Determine styling based on variant and color
  const getBackgroundColor = () => {
    if (disabled) return colors.neutral[300];
    if (variant === 'contained') {
      return colors[color][500];
    }
    return 'transparent';
  };

  const getBorderColor = () => {
    if (disabled) return colors.neutral[300];
    if (variant === 'outlined') {
      return colors[color][500];
    }
    return 'transparent';
  };

  const getTextColor = () => {
    if (disabled) return colors.neutral[500];
    if (variant === 'contained') {
      return colors.white;
    }
    return colors[color][500];
  };

  const getPadding = () => {
    switch (size) {
      case 'small':
        return { paddingVertical: spacing.xs, paddingHorizontal: spacing.md };
      case 'large':
        return { paddingVertical: spacing.md, paddingHorizontal: spacing.xl };
      default:
        return { paddingVertical: spacing.sm, paddingHorizontal: spacing.lg };
    }
  };

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      ...getPadding(),
    },
    variant === 'outlined' && styles.outlined,
    fullWidth && styles.fullWidth,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator 
            size="small" 
            color={getTextColor()} 
            style={styles.loader} 
          />
        ) : (
          <>
            {startIcon && <View style={styles.startIcon}>{startIcon}</View>}
            <Typography 
              variant="button" 
              color={getTextColor()}
              style={[
                size === 'small' && styles.smallText,
                size === 'large' && styles.largeText
              ]}
            >
              {children}
            </Typography>
            {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlined: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  fullWidth: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startIcon: {
    marginRight: spacing.xs,
  },
  endIcon: {
    marginLeft: spacing.xs,
  },
  loader: {
    marginHorizontal: spacing.xs,
  },
  smallText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 16,
  },
});