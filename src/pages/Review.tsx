import { useState } from "react";
import Flashcard from "../components/Flashcard";
import "./Review.css";
import {
  Difficulty,
  type FlashCardDeck,
  type FlashcardModel,
  type ReviewState,
} from "../models/FlashcardModel";

const Review = () => {
  const deckMock: FlashCardDeck = [
    {
      id: crypto.randomUUID(),
      front: "Apple",
      back: "Pomme",
      nbError: 0,
    },
    {
      id: crypto.randomUUID(),
      front: "Pear",
      back: "Poire",
      nbError: 0,
    },
    {
      id: crypto.randomUUID(),
      front: "Dog",
      back: "Chien",
      nbError: 0,
    },
  ];

  const [reviewState, setReviewState] = useState<ReviewState>({
    current: deckMock,
    sortDeckLv0: [],
    sortDeckLv1: [],
    sortDeckLv2: [],
    sortDeckLv3: [],
    sortDeckLv4: [],
  });
  const [showBack, setShowBack] = useState(false);

  const handleShowAnswer = () => {
    setShowBack(true);
  };

  const [workingDeck, setWorkingDeck] = useState<FlashcardModel[]>(deckMock);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = workingDeck[currentIndex];

  const handleScore = (level: Difficulty) => {
    console.log("Level choisi :", level);

    // Sort card
    switch (level) {
      case Difficulty.VeryEasy:
        setReviewState((prev) => ({
          ...prev,
          sortDeckLv0: [...prev.sortDeckLv0, currentCard],
        }));
        console.log(currentCard);
        break;

      case Difficulty.PrettyEasy:
        setReviewState((prev) => ({
          ...prev,
          sortDeckLv1: [...prev.sortDeckLv1, currentCard],
        }));
        console.log(currentCard);
        break;

      case Difficulty.Medium:
        setReviewState((prev) => ({
          ...prev,
          sortDeckLv1: [...prev.sortDeckLv2, currentCard],
        }));
        console.log(currentCard);
        break;

      case Difficulty.Hard:
        setReviewState((prev) => ({
          ...prev,
          sortDeckLv1: [...prev.sortDeckLv3, currentCard],
        }));
        console.log(currentCard);
        break;

      case Difficulty.NoIdea:
        setReviewState((prev) => ({
          ...prev,
          sortDeckLv1: [...prev.sortDeckLv4, currentCard],
        }));
        console.log(currentCard);
        break;
    }

    console.log("Card : "+currentCard.front+" added to "+ level) ;
    HandleNextCard();
  };

  const HandleNextCard = () => {
    if (currentIndex < workingDeck.length - 1) {
      setCurrentIndex(() => {
        return currentIndex + 1;
      });
    } else console.log("Deck finished");
  };
  return (
    <div className="review-container">
      <h1 className="review-title">Révision des cartes 🧠</h1>

      <Flashcard
        key={currentCard.id}
        id={currentCard.id}
        front={currentCard.front}
        back={currentCard.back}
        nbError={currentCard.nbError}
      />

      <div className="flashcard-actions">
        <button
          className="button"
          onClick={() => handleScore(Difficulty.VeryEasy)}
        >
          ✅ Facile
        </button>
        <button
          className="button"
          onClick={() => handleScore(Difficulty.PrettyEasy)}
        >
          🤔 Plutôt facile
        </button>
        <button
          className="button"
          onClick={() => handleScore(Difficulty.Medium)}
        >
          😐 Moyen
        </button>
        <button className="button" onClick={() => handleScore(Difficulty.Hard)}>
          😕 Doute
        </button>
        <button
          className="button"
          onClick={() => handleScore(Difficulty.NoIdea)}
        >
          ❌ Pas du tout
        </button>
      </div>
    </div>
  );
};

export default Review;
