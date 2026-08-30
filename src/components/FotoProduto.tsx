import type { Produto } from "../types/Produto";

type ProductImageProps = {
  product: Produto;
};

function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="product-image">
      <img src={product.imagem} alt={product.nome} />
    </div>
  );
}

export default ProductImage;