export type FlashcardModel = {
  id: string;
  front: string;
  back: string;
  nbError: number;
  lastReviewed?: Date;
};

export type FlashCardDeck = FlashcardModel[];

export type ReviewState = {
  current: FlashCardDeck;
  sortDeckLv0: FlashCardDeck;
  sortDeckLv1: FlashCardDeck;
  sortDeckLv2: FlashCardDeck;
  sortDeckLv3: FlashCardDeck;
  sortDeckLv4: FlashCardDeck;
};

export const Difficulty = {
  VeryEasy: 0,
  PrettyEasy: 1,
  Medium: 2,
  Hard: 3,
  NoIdea: 4,
} as const;
export type Difficulty = typeof Difficulty[keyof typeof Difficulty];
