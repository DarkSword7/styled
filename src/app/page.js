"use client";
import { useQuery } from "@apollo/client";
import { PRODUCT_QUERY } from "../../lib/query";

import Image from "next/image";

export default function Home() {
  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: { id: 1000 },
  });

  const products = data?.products.data;
  console.log(products);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <title>Products</title>
      <main>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.attributes.title}>
            <h2>{product.attributes.title}</h2>
            <p>{product.attributes.description}</p>
            <p>{product.attributes.price}</p>
            <Image
              src={
                product.attributes.image.data.attributes.formats.thumbnail.url
              }
              alt={product.attributes.title}
              width={200}
              height={200}
              priority
            />
          </div>
        ))}
      </main>
    </>
  );
}
