import React, { createContext, useContext, useState, useEffect } from "react";

// Basket Context
const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

// Favorites Context
const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedBasket = JSON.parse(localStorage.getItem("basket"));
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedBasket) {
      setBasket(savedBasket);
    }
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToBasket = (product) => {
    const existingProductIndex = basket.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex].quantity += 1;
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    const updatedBasket = basket.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setBasket(updatedBasket);
  };

  const decreaseQuantity = (productId) => {
    const updatedBasket = basket.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setBasket(updatedBasket);
  };

  const removeFromBasket = (productId) => {
    const updatedBasket = basket.filter(item => item.id !== productId);
    setBasket(updatedBasket);
  };

  const addToFavorites = (product) => {
    if (!favorites.find(item => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId));
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, increaseQuantity, decreaseQuantity, removeFromBasket }}
    >
      <FavoritesContext.Provider
        value={{ favorites, addToFavorites, removeFromFavorites }}
      >
        {children}
      </FavoritesContext.Provider>
    </BasketContext.Provider>
  );
};
