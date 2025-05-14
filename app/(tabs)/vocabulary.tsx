import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '@/components/common/Typography';
import CategoryCard from '@/components/vocabulary/CategoryCard';
import { vocabularyCategories } from '@/constants/data';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { Search } from 'lucide-react-native';

export default function VocabularyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Typography variant="h2" color={colors.neutral[800]}>
          Vocabulary
        </Typography>
        <Typography variant="body1" color={colors.neutral[600]} style={styles.subtitle}>
          Learn new words organized by categories
        </Typography>
        <View style={styles.searchContainer}>
          <Search size={20} color={colors.neutral[400]} style={styles.searchIcon} />
          <Typography variant="body2" color={colors.neutral[400]}>
            Search for words...
          </Typography>
        </View>
      </View>

      <FlatList
        data={vocabularyCategories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CategoryCard
            id={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon as any}
            color={item.color}
            progress={item.progress}
            wordCount={item.wordCount}
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
    marginBottom: spacing.xl,
  },
  subtitle: {
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.neutral[200],
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  list: {
    paddingBottom: spacing.xxxl,
  },
});