import Header from "../components/header";
import ProductImage from "../components/FotoProduto";
import ProductInfo from "../components/InfoProduto";
import BotaoCompra from "../components/BotaoCompra";
import Comentarios from "../components/Comentarios";

import type { Produto } from "../types/Produto";
const product: Produto = {
  id: 1,
  nome: "Fone Bluetooth",
  preco: 89.90,
  descricao: "\n Fone de ouvido Bluetooth sem fio, perfeito para uso no dio a dia, \n este fone tem otimos alto-falantes, garantindo que voce possa escutar as suas musicas favoritas com praticidade e qualidade.",
  imagem: "/public/fone.jpg",
};
function ProductPage() {
  return (
    <>
      <Header />

      <main className="product-page">
        <ProductImage product={product} />

        <ProductInfo product={product} />

        <BotaoCompra />
      </main>

      <Comentarios />
    </>
  );
}

export default ProductPage;