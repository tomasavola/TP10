import React, { createContext, useState, useEffect } from "react";

const KEY_FAVORITES = 'favorites';

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = () => {
        let items = JSON.parse(localStorage.getItem(KEY_FAVORITES));
        if (items) {
            setFavorites(items);
        } else {
            setFavorites([]);
        }
    }

    const addCreation = (creation) => {
        setFavorites([
            ...favorites,
            creation
        ])
        localStorage.setItem(KEY_FAVORITES, JSON.stringify([...favorites, creation]));
    }

    const deleteCreation = (deletedCreation) => {
        let newArray = favorites.filter(creation => creation.id !== deletedCreation.id);
        setFavorites(newArray);
        localStorage.setItem(KEY_FAVORITES, JSON.stringify(newArray));
    }

    useEffect(() => {
        loadFavorites();
    }, []);

    useEffect(() => {
        console.log('FAVORITOS:',favorites);
    }, [favorites]);

    if(favorites){
        return (
            <FavoritosContext.Provider
                value={{
                    favorites,
                    addCreation,
                    deleteCreation
                }}
            >
                {props.children}
            </FavoritosContext.Provider>
        );
    }else{
        return(
            <></>
        )
    }
};

export default FavoritosProvider;