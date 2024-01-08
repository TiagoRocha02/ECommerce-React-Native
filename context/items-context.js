import { View, Text } from "react-native";
import React, { Children, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext("dssds");

export default function ItemsContext({ children }) {
  const [items, setItems] = useState([]);
  function addItem(item){
    setItems((items) => [...items, item]);
  }
  
  function removeItem(ritem){
    setItems((items) =>
    items.filter((item) => item !== ritem)
  );
  
  }

  const ItemActions = {
    items:items,
    addItem:addItem,
    removeItem:removeItem
  }

  return <CartContext.Provider value={ItemActions}>{children}</CartContext.Provider>;
}
