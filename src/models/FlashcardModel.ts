export type FlashcardModel = {
  id: string;
  front: string;
  back: string;
  nbError: number;
  lastReviewed?: Date;
};