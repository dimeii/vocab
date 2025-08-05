import { useState } from "react";
import "./Flashcard.css"
import type { FlashcardModel } from "../models/FlashcardModel";



  const Flashcard = ({ front, back, id, nbError }: FlashcardModel) => {
    const [isBlurred, setIsBlurred] = useState(true);
  
    const handleClick = () => {
      console.log("setIbLur");
      const newVal = !isBlurred;
      setIsBlurred(newVal);
    };
  
    return (
      <div className="flashcard" onClick={handleClick}>
        <h2 className="flashcard-front">{front}</h2>
        <h2 className={`flashcard-back ${!isBlurred ?"visible":""}`}>
          {back}
        </h2>
      </div>
    );
  };
  
  export default Flashcard;