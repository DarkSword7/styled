"use client";
import { useQuery } from "@apollo/client";
import { PRODUCT_QUERY } from "../../lib/query";

import Products from "@/components/Products";
import { Gallary } from "../../styles/Gallary";

export default function Home() {
  const { data, loading, error } = useQuery(PRODUCT_QUERY);

  const products = data?.products.data;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <title>Products</title>

      <main>
        <Gallary>
          {products.map((product) => (
            <Products key={product.attributes.title} product={product} />
          ))}
        </Gallary>
      </main>
    </>
  );
}
