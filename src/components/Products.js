import Image from "next/image";

export default function Products({ product }) {
  // extract the product data from the props
  const { title, price } = product.attributes;
  const { url } = product.attributes.image.data.attributes.formats.small;
  return (
    <div>
      <div>
        <Image src={url} alt={title} width={200} height={200} priority />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
}
