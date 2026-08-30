function Comentarios() {
  return (
    <section className="comment-card">
      <h2>Deixe sua avaliação, ela é muito importante para a nossa equipe e pro vendedor.</h2>

      <label htmlFor="comment">
        Escreva o seu comentário:
      </label>

      <textarea
        id="comment"
        placeholder="Escreva aqui o que você achou do produto."
      />

      <button className="comment-button">
        Enviar comentário
      </button>
    </section>
  );
}

export default Comentarios;