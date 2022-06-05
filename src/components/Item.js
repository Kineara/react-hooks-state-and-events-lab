import React, {useState} from "react";


function Item({ name, category }) {
  const [inCart, updateInCart] = useState("");

  function updateCartHandler () {
    if (inCart === "") {
      updateInCart(() => {
        return "in-cart"
      })

    } else {
      updateInCart(() => {
        return "";
      })
    };
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {updateCartHandler}>{inCart === "" ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
