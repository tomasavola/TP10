import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataPortfolioContext = createContext();

const DataPortfolioProvider = (props) => {
  const [dataPortfolio, setDataPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("/json/creations.json")
      .then((result) => {
        setDataPortfolio(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log('dataPortfoliocontext',dataPortfolio)

  return (
    <DataPortfolioContext.Provider
      value={{
        dataPortfolio,        
      }}
    >
      {props.children}
    </DataPortfolioContext.Provider>
  );
};

export default DataPortfolioProvider;