import { useState } from "react";
import Flashcard from "../components/Flashcard";
import "./Review.css";
import type { FlashcardModel } from "../models/FlashcardModel";

const Review = () => {

  const deckMock: FlashcardModel[] = [
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
  const [showBack, setShowBack] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleShowAnswer = () => {
    setShowBack(true);
  };

  const handleScore = (level: number) => {
    setScore(level);
    console.log("Score choisi :", level);
    if(currentIndex <= workingDeck.length)
      setCurrentIndex(() => {return currentIndex+1})
  };

  

  const [workingDeck, setWorkingDeck] = useState<FlashcardModel[]>(deckMock);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = workingDeck[currentIndex];

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
        <button className="button" onClick={() => handleScore(0)}>
          ✅ Facile
        </button>
        <button className="button" onClick={() => handleScore(1)}>
          🤔 Plutôt facile
        </button>
        <button className="button" onClick={() => handleScore(2)}>
          😐 Moyen
        </button>
        <button className="button" onClick={() => handleScore(3)}>
          😕 Doute
        </button>
        <button className="button" onClick={() => handleScore(4)}>
          ❌ Pas du tout
        </button>
      </div>
    </div>
  );
};

export default Review;
