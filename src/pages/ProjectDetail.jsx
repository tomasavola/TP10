import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataPortfolioContext } from "../context/DataPorfolioContext";
import { FavoritosContext} from "../context/FavoritosContext"


export default function ProjectDetail() {

  let { dataPortfolio } = useContext(DataPortfolioContext);
  let { favorites, addCreation, deleteCreation } = useContext(FavoritosContext);
  const { creationId } = useParams();
  const [creation, setCreation] = useState(null);

  const loadCreation = () => {
    dataPortfolio.map(data => {
      if (data.id.toString() === creationId.toString()) {
        setCreation(data);
      }
    })
  }

  useEffect(() => {
    loadCreation();
  }, []);

  if (creation) {
    return (
      <>
        <div className="creationContainer">
          <img src={creation.img} alt="" style={{margin: '20px' }} />
          <div className="dataContainer">
            <h1>{creation.description}</h1>
            <h3 style={{width: '100%'}}>{creation.date}</h3>
            {favorites.find((favorite) => favorite.id.toString() === creationId.toString()) ? (
              <button onClick={() => deleteCreation(creation)}>Delete from favorites</button>
            ):(
              <button onClick={() => addCreation(creation)}>Add to favorites</button>
            )}           
          </div>
        </div>
      </>
    )
  } else {
    return (
      <></>
    )
  }
}