import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import Card from '@/components/common/Card';
import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import * as Lucide from 'lucide-react-native';
import { Play } from 'lucide-react-native';

interface ExerciseCardProps {
  id: string;
  title: string;
  type: string;
  category: string;
  difficulty: string;
  questionCount: number;
  timeEstimate: string;
  icon: keyof typeof Lucide;
  color: string;
}

export default function ExerciseCard({
  id,
  title,
  type,
  category,
  difficulty,
  questionCount,
  timeEstimate,
  icon,
  color,
}: ExerciseCardProps) {
  const router = useRouter();
  const LucideIcon = Lucide[icon as keyof typeof Lucide] || Lucide.HelpCircle;

  const handlePress = () => {
    router.push(`/practice/${id}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return colors.success[500];
      case 'intermediate':
        return colors.accent[500];
      case 'advanced':
        return colors.error[500];
      default:
        return colors.primary[500];
    }
  };

  const difficultyColor = getDifficultyColor(difficulty);

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
          <LucideIcon size={24} color={color} />
        </View>
        <View style={styles.titleContainer}>
          <Typography variant="h5" color={colors.neutral[800]}>
            {title}
          </Typography>
          <View style={styles.badgeRow}>
            <View style={[styles.badge, { backgroundColor: color + '20' }]}>
              <Typography variant="caption" color={color}>
                {type}
              </Typography>
            </View>
            <View style={[styles.badge, { backgroundColor: difficultyColor + '20' }]}>
              <Typography variant="caption" color={difficultyColor}>
                {difficulty}
              </Typography>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Typography variant="body2" color={colors.neutral[600]}>
            Questions
          </Typography>
          <Typography variant="subtitle2" color={colors.neutral[800]}>
            {questionCount}
          </Typography>
        </View>
        <View style={styles.detailItem}>
          <Typography variant="body2" color={colors.neutral[600]}>
            Time
          </Typography>
          <Typography variant="subtitle2" color={colors.neutral[800]}>
            {timeEstimate}
          </Typography>
        </View>
        <View style={styles.detailItem}>
          <Typography variant="body2" color={colors.neutral[600]}>
            Category
          </Typography>
          <Typography variant="subtitle2" color={colors.neutral[800]}>
            {category}
          </Typography>
        </View>
      </View>

      <Button 
        onPress={handlePress}
        startIcon={<Play size={16} color={colors.white} />}
        color={category === 'vocabulary' ? 'primary' : 
              category === 'grammar' ? 'secondary' : 
              category === 'listening' ? 'accent' : 'success'}
        fullWidth
      >
        Start Exercise
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  titleContainer: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: 16,
    marginRight: spacing.sm,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  detailItem: {
    alignItems: 'center',
  },
});