import { Fragment, useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchContext";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const products = useProducts()
  const [filteredProducts,setFilteredProducts] = useState(products)
  const { search } = useContext(SearchContext);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Fragment>
  );
}
