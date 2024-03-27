import { createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
//temel
export const BasketContext = createContext();

//saglayici
export const BasketPovider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("sepet", []);

  //sepete urun ekleyen fonsiyon
  const addToBasket = (newProduct) => {
    //1. Bu urunden sepette var mi kontrol et
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      //2. urun sepette varsa > miktarini 1 arttir
      // > bulunan urunun miktarini 1 arttir(nesneyi guncelle)
      const updated = { ...found, amount: found.amount + 1 };
      // > Sepet dizisindeki eski urun yerine guncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      // > state'i guncelle
      setBasket(newBasket);
      toast.success(`Product has been increased (${updated.amount})`);
    } else {
      //3.urun sepette yok > urunu sepete ekle(miktar 1)
      setBasket(basket.concat({ ...newProduct, amount: 1 }));

      toast.success(`Product added to basket`);
    }
  };
  //sepetten urun cikaran fonksiyon
  const removeFromBasket = (delete_id) => {
    //silinecek elemanin disarisindki kalanlar ile yen dizi olustur.
    const filtred = basket.filter((i) => i.id !== delete_id);
    //state'i guncelle
    setBasket(filtred);

    toast.error("Product has been  removed from the basket");
  };

  //miktar azaltan fonsiyon
  const decreaseAmount = (delete_id) => {
    // miktarai azaltilacak olan elemani sepette bul
    const found = basket.find((i) => i.id === delete_id);
    // mktari birden fazla ise bir azalt
    if (found.amount > 1) {
      //1 elemanin guncel nesenisini olustur
      const updated = { ...found, amount: found.amount - 1 };
      //2 dizideki elemanin eski hali yerine guncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      //state'i guncelle
      setBasket(newBasket);
      //egerki miktari 1 ise urunu sepetten kaldir

      toast.info(`Product has been reduced (${updated.amount})`);
    } else {
      removeFromBasket(delete_id);
    }
  };
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
