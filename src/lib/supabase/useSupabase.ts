import { useState } from "react";
import { supabase } from "./products";

export const useSupabase = () => {
  const [products, setProducts] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensProduct, setMensProduct] = useState<any>([]);
  const [womensProduct, setWomensProduct] = useState<any>([]);

  const getProductsFromSupabase = async () => {
    let { data, error } = await supabase.from("products").select("*");
    if (data) {
      setProducts(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getFilteredProducts = async (query: string) => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`
      );

    if (data) {
      setFilteredProducts(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (id: number) => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);
    if (data) {
      setSingleProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getMensClothing = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("category", `men's clothing`);
    if (data) {
      setMensProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getWomensClothing = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("category", `women's clothing`);
    if (data) {
      setWomensProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };

  
  return {
    products,
    getProductsFromSupabase,
    filteredProducts,
    getFilteredProducts,
    getSingleProduct,
    singleProduct,
    mensProduct,
    getMensClothing,
    womensProduct,
    getWomensClothing,
  };
};
