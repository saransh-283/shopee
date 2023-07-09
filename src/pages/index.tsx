import { Fragment, useContext, useEffect, useState } from "react";
import { Products } from "@/types/products";
import { SearchContext } from "@/contexts/SearchContext";

export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    })();
  }, []);
  return (
    <Fragment>
      {search}
    </Fragment>
  );
}
