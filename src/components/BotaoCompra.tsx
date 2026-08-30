function BotaoCompra() {
  return (
    <aside className="purchase-box">
      <div className="delivery">
        <h3>Entrega</h3>
        <p>Entregar em: Recife - PE</p>
        <p>Frete grátis para todo o nordeste!</p>
        <p>Calculando frete...</p>
      </div>

      <div className="payment">
        <h3>Pagamento</h3>
        <p> Debito, Pix, Boleto e Cartao de Credito</p>
        <p>até 12x sem juros</p>
      </div>

      <div className="purchase-actions">
        <button className="buy-button">
          Comprar
        </button>

        <button className="cart-button">
          Adicionar ao carrinho
        </button>
      </div>
    </aside>
  );
}

export default BotaoCompra;