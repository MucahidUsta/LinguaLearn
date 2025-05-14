import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import Card from '@/components/common/Card';
import Typography from '@/components/common/Typography';
import ProgressBar from '@/components/common/ProgressBar';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import * as Lucide from 'lucide-react-native';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Lucide;
  color: string;
  progress: number;
  wordCount: number;
}

export default function CategoryCard({
  id,
  title,
  description,
  icon,
  color,
  progress,
  wordCount
}: CategoryCardProps) {
  const router = useRouter();
  const LucideIcon = Lucide[icon as keyof typeof Lucide] || Lucide.Book;

  const handlePress = () => {
    router.push(`/vocabulary/${id}`);
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Card style={styles.card}>
        <View style={styles.content}>
          <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
            <LucideIcon size={24} color={color} />
          </View>
          <View style={styles.textContainer}>
            <Typography variant="h5" color={colors.neutral[800]}>
              {title}
            </Typography>
            <Typography variant="body2" color={colors.neutral[600]}>
              {description}
            </Typography>
            <View style={styles.statsContainer}>
              <Typography variant="caption" color={colors.neutral[500]}>
                {wordCount} words
              </Typography>
              <Typography variant="caption" color={colors.neutral[500]}>
                {Math.round(progress * 100)}% complete
              </Typography>
            </View>
            <ProgressBar 
              progress={progress} 
              color={color}
              style={styles.progressBar} 
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },
  progressBar: {
    marginTop: spacing.xs,
  },
});