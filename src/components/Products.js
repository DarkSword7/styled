/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ProductStyle } from "../../styles/ProductStyle";

export default function Products({ product }) {
  // extract the product data from the props
  const { title, price, slug } = product.attributes;
  const { url } = product.attributes.image.data.attributes.formats.small;
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={url} alt={title} />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>₹{price}</h3>
    </ProductStyle>
  );
}
