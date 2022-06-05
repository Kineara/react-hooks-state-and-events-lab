import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [colorMode, switchColor] = useState(false);
  const appClass = colorMode ? "App dark" : "App light"

  function handleColorMode () {
    switchColor((colorMode) => !colorMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleColorMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
