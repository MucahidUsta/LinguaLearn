import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '@/components/common/Typography';
import LessonCard from '@/components/grammar/LessonCard';
import { grammarLessons } from '@/constants/data';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';

export default function GrammarScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Typography variant="h2" color={colors.neutral[800]}>
          Grammar
        </Typography>
        <Typography variant="body1" color={colors.neutral[600]} style={styles.subtitle}>
          Master the rules of English language
        </Typography>
      </View>

      <View style={styles.filterSection}>
        <View style={[styles.filterButton, styles.activeFilter]}>
          <Typography variant="button" color={colors.primary[500]}>
            All Lessons
          </Typography>
        </View>
        <View style={styles.filterButton}>
          <Typography variant="button" color={colors.neutral[500]}>
            Beginner
          </Typography>
        </View>
        <View style={styles.filterButton}>
          <Typography variant="button" color={colors.neutral[500]}>
            Intermediate
          </Typography>
        </View>
      </View>

      <FlatList
        data={grammarLessons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LessonCard
            id={item.id}
            title={item.title}
            description={item.description}
            level={item.level}
            icon={item.icon as any}
            color={item.color}
            progress={item.progress}
            unlocked={item.unlocked}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
    padding: spacing.md,
  },
  header: {
    marginBottom: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  filterSection: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  filterButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    marginRight: spacing.sm,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.neutral[200],
  },
  activeFilter: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[200],
  },
  list: {
    paddingBottom: spacing.xxxl,
  },
});