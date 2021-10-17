import { useEffect, useState } from "react";
import "./App.css";
import Routes from "./components/Routes";
import * as productService from "./api/product";

function App() {
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Điều hoà Toshiba", company: "Toshiba", price: 10000000 },
  //   { id: 2, name: "Điều hoà LG", company: "LG", price: 7000000 },
  //   { id: 3, name: "Điều hoà Hitachi", company: "Hitachi", price: 7000000 },
  // ]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://60cd9e2591cc8e00178dbb09.mockapi.io/api/product/")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    productService.getAll().then((response) => setProducts(response.data));
  }, []);

  const onHandleAdd = async (data) => {
    try {
      // data = [...data, +products[products.length - 1].id];
      const { product } = await productService.add(data);
      // product.id += products[products.length - 1].id;
      setProducts([...products, product]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDelete = async (id) => {
    try {
      productService.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      alert("Lỗi khi xoá: " + error);
    }
  };

  const onHandleEdit = async (id, productEdit) => {
    try {
      productService.update(productEdit);
      const newProducts = products.map((product) => {
        if (product.id === id) {
          product = productEdit;
        }
      });

      setProducts(newProducts);
    } catch (error) {
      alert("Lỗi khi sửa: " + error);
    }
  };

  return (
    <Routes
      products={products}
      onAdd={onHandleAdd}
      onRemoveItem={onHandleDelete}
      onEditItem={onHandleEdit}
    />
  );
}

export default App;
