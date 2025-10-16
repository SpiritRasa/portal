import { games } from "../../data/gameList";
import "../Styles/MainFeed.css";
export default function MainFeed() {
  const game = games.map((item) => (
    <li className="game-container" key={item.title}>
      <h3>{item.title}</h3>
      <img src="src/assets/poster.jpg" alt="game picture" />
      <p>{item.description}</p>
    </li>
  ));
  return (
    <section>
      <h2>Популярные</h2>
      <ul>{game}</ul>
    </section>
  );
}
