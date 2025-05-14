import { View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '@/components/common/Typography';
import ExerciseCard from '@/components/practice/ExerciseCard';
import { practiceExercises } from '@/constants/data';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';

export default function PracticeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={[
        styles.content, 
        { paddingTop: insets.top }
      ]}
    >
      <View style={styles.header}>
        <Typography variant="h2" color={colors.neutral[800]}>
          Practice
        </Typography>
        <Typography variant="body1" color={colors.neutral[600]} style={styles.subtitle}>
          Test your knowledge with exercises
        </Typography>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Typography variant="h3" color={colors.primary[500]}>
            8
          </Typography>
          <Typography variant="body2" color={colors.neutral[600]}>
            Exercises completed
          </Typography>
        </View>
        <View style={styles.statCard}>
          <Typography variant="h3" color={colors.success[500]}>
            85%
          </Typography>
          <Typography variant="body2" color={colors.neutral[600]}>
            Average score
          </Typography>
        </View>
      </View>

      <View style={styles.exercisesSection}>
        <Typography variant="h4" color={colors.neutral[800]} style={styles.sectionTitle}>
          Recommended Exercises
        </Typography>
        
        {practiceExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            id={exercise.id}
            title={exercise.title}
            type={exercise.type}
            category={exercise.category}
            difficulty={exercise.difficulty}
            questionCount={exercise.questionCount}
            timeEstimate={exercise.timeEstimate}
            icon={exercise.icon as any}
            color={exercise.color}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xxxl,
  },
  header: {
    marginBottom: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  statCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    width: '48%',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  exercisesSection: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
});