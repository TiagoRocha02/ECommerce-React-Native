import { View, Text } from "react-native";
import React, { Children, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext("dssds");

export default function ItemsContext({ children }) {
  const [items, setItems] = useState([]);
  const [ThemeColors,setThemecolors] = useState({})

/*   setThemecolors({
    color1:"#222",
    color2:"#00C9A7",
    color3:"#white"
  }) */

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
    removeItem:removeItem,
    ThemeColors:ThemeColors
  }
  return <CartContext.Provider value={ItemActions}>{children}</CartContext.Provider>;
}
