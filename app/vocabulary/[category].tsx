import { View, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { ArrowLeft, CirclePlay as PlayCircle } from 'lucide-react-native';
import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import WordCard from '@/components/vocabulary/WordCard';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { basicWords, vocabularyCategories } from '@/constants/data';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [words, setWords] = useState(basicWords);

  // Find the category details from the category ID
  const categoryDetails = vocabularyCategories.find(cat => cat.id === category);

  const handleToggleLearned = (wordId: string) => {
    setWords(words.map(word => 
      word.id === wordId 
        ? { ...word, learned: !word.learned } 
        : word
    ));
  };

  const handlePlaySound = () => {
    // In a real app, this would play the pronunciation audio
    console.log('Playing sound...');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Button
          variant="text"
          startIcon={<ArrowLeft size={24} color={colors.neutral[800]} />}
          onPress={() => router.back()}
          style={styles.backButton}
        />
        
        <View style={styles.headerContent}>
          <Typography variant="h3" color={colors.neutral[800]}>
            {categoryDetails?.title || 'Vocabulary Category'}
          </Typography>
          <Typography variant="body2" color={colors.neutral[600]} style={styles.subtitle}>
            {categoryDetails?.description || 'Learn new words'}
          </Typography>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.actionButtons}>
          <Button 
            variant="contained" 
            startIcon={<PlayCircle size={20} color={colors.white} />}
            style={styles.actionButton}
          >
            Start Learning
          </Button>
        </View>

        <FlatList
          data={words}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <WordCard
              word={item.word}
              pronunciation={item.pronunciation}
              definition={item.definition}
              examples={item.examples}
              partOfSpeech={item.partOfSpeech}
              synonyms={item.synonyms}
              learned={item.learned}
              onToggleLearned={() => handleToggleLearned(item.id)}
              onPlaySound={handlePlaySound}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  header: {
    padding: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
  },
  headerContent: {
    paddingHorizontal: spacing.sm,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  contentContainer: {
    flex: 1,
    padding: spacing.md,
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  actionButton: {
    flex: 1,
  },
  list: {
    paddingBottom: spacing.xxxl,
  },
});