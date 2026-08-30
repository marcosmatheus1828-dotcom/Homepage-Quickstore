import type { Produto } from "../types/Produto";

type ProductInfoProps = {
  product: Produto;
};

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <section className="product-info">
      <h1>{product.nome}</h1>

      <p className="product-price">
        R$ {product.preco.toFixed(2)}
      </p>

      <p className="product-description">
        {product.descricao}
      </p>
    </section>
  );
}

export default ProductInfo;