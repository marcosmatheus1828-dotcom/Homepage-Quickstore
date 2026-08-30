function Header() {
  return (
    <header className="header">
      <div className="logo">
        Quick Store
      </div>

      <nav className="navigation">
        <a href="#">Início</a>
        <a href="#">Recomendações</a>
      </nav>

      <div className="header-actions">
        <button>🛒</button>
        <button>👤</button>
      </div>
    </header>
  );
}

export default Header;