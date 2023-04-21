import styles from "./App.module.scss";
import iphone from "./assets/iphone.jpg";
import watch from "./assets/watch.jpg";
import React, { useState } from "react";
import Add from "./components/Add/Add";
import Product from "./components/Product/Product";

function App() {
  const productsList = [
    { name: "Iphone", price: 800, id: 1, img: iphone },
    { name: "Watch", price: 100, id: 2, img: watch },
  ];

  const [products, setProducts] = useState(productsList);

  const addProducts = (
    setNewProducts,
    newProducts,
    isValidateName,
    isValidatePrice
  ) => {
    if (newProducts.name == "" || newProducts.price == "") {
      return;
    }
    if (isValidateName && isValidatePrice) {
      let key = Math.random();
      setNewProducts((prev) => ({ ...prev, id: key }));
      setProducts((prev) => [...prev, newProducts]);
      setNewProducts((prev) => ({ ...prev, name: "", price: "" }));
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className={styles.wrapper}>
      <Add onAddProduct={addProducts} />
      <div className={styles.list}>
        {products.map((product) => (
          <Product
            img={product.img}
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
