/* eslint-disable @next/next/no-img-element */
"use client";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_QUERY } from "../../../../lib/query";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../../../styles/ProductDetails";
import { CircleMinus, CirclePlus } from "lucide-react";

export default function ProductDetails({ params }) {
  const { id } = params;

  //   fetch the product data from the query
  const { data, loading, error } = useQuery(GET_PRODUCT_QUERY, {
    variables: { slug: id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.small.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>

        <Quantity>
          <span>Quantity</span>
          <button>
            <CircleMinus />
          </button>
          <p>0</p>
          <button>
            <CirclePlus />
          </button>
        </Quantity>
        <Buy>Add to Cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
