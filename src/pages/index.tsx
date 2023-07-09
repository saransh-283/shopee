import { Fragment, useContext, useEffect, useState } from "react";
import { Product } from "@/types/product";
import { SearchContext } from "@/contexts/SearchContext";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Fragment>
  );
}
