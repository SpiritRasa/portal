import "../Styles/Seeker.css";

export default function Seeker() {
  function log() {
    console.log("Нажали!");
  }

  return (
    <div className="gameSeeker-container">
      <form id="gameSeeker">
        <input type="text" id="seekerInput" placeholder="Вот, что я хочу..." />
        <div className="search-icon"></div>
        <button className="seekButton" onClick={log}></button>
      </form>
    </div>
  );
}
