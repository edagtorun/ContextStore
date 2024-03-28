/*
*Context Api;  Uygulamada birden cok bilesenin ihtuyaci olan verileri bilesennlerden bagimsiz bir sekilde konumlanan merkezlerde yonetmeye yarar.

*Context yapisi icerisinde verilerin state'ini ve verileri degistirmeye yarayan fonsiyonlari tutabilir.

*Context, tuttugumuz statleri bilesenlere dogrudan aktarim yapabilen state yonetim aracidir
*/

//! Adim 1.
import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const ProductContext = createContext();
//!Adim 2, verileri bilesenlere aktaracak olan saglayiciyi ve onun tuttugu verileri tanimlama

export function ProductProvider({ children }) {
  //urunler verisi
  const [products, setProducts] = useState();
  //gosterilecek kategorinin verisi
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    //hangi adrese istek atilacagni belirledik
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);
  //butun urunleri gormek istiyorsak > /products
  // bir kategoriye ait urunleri gormek istiyorsak > /products/category/jewelery
  //!3, Saglayici fonsiyonlari mutlaka Provider'i return etmeli ve App'i sarmalamali
  return (
    <ProductContext.Provider
      value={{ products, setSelectedCategory, selectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
