import React,{useContext} from "react";
import "./card.css";
import { handleInfo} from "../Contexto/Contexto";

const Card = () => {

    const {frase,autor} = useContext(handleInfo);

  return (
    <div className="cardContainer">
      <div className="card front">
        <h4>Touch Me!</h4>
      </div>
      <div className="card back">
        <p>
          {frase}
        </p>
        <p className="autor">{autor}</p>
      </div>
    </div>
  );
};

export default Card;
