import "../Styles/Header.css";

export default function Header() {
  return (
    <header>
      <a href="#">
        <div className="logo-container">
          <div className="logo"></div>
          <h2 className="logo-header">Portal</h2>
        </div>
      </a>

      <ul className="header-menu">
        <li className="menu-item">
          <a href="#">Игры</a>
        </li>
        <li className="menu-item">
          <a href="#">Студии</a>
        </li>
        <li className="menu-item">
          <a href="#">Подборки</a>
        </li>
        <li className="menu-item">
          <a href="#">Новости</a>
        </li>
      </ul>

      <button>Войти</button>
    </header>
  );
}
