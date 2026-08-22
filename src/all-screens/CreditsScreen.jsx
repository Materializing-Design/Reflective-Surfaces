import { useEffect, useState } from "react";
import "../stylesheets/CreditsScreen.css";
import delay from "../components/delay";

const Credits = (props) => {
  const [position, setPosition] = useState(100);

  async function slideIn() {
    await delay(1100);
    const step = 0.1;
    for (let index = position; index >= -100; index -= step) {
      setPosition(index);
      await delay(5);
    }
    props.onComplete();
  }

  useEffect(() => {
    slideIn();
  }, []);

  return (
    <div
      className="credits-container"
      style={{ position: "absolute", top: position + "vh" }}
    >
      <p className="subheading">Credits</p>
      <p className="credits-entry">Muhammad Shahrom Ali</p>
      <p className="credits-entry">Rilla Khaled</p>
      <p className="credits-entry">Pippin Barr</p>
      <p className="credits-entry">Matt Bethancourt</p>
      <p className="credits-entry">Kalervo A. Sinervo</p>
      <p className="credits-entry">Femke Kocken</p>
      <p className="credits-entry">Vadim Nickel</p>
      <p className="credits-entry">Chip Limeburner</p>
      <p className="credits-entry">Enric G. Llagostera</p>
    </div>
  );
};

const GamesAsResearch = (props) => {
  const [opacity, setOpacity] = useState(0);

  async function transitionIn() {
    const transition_step = 0.1;
    for (let index = 0; index <= 10; index++) {
      setOpacity(transition_step * index);
      await delay(30);
    }
  }

  useEffect(() => {
    transitionIn();
  }, []);
  return (
    <div className="games-as-research-container" style={{ opacity: opacity }}>
      <p className="presentation">a Games as Research project</p>
      <p className="heading">Reflective Surfaces</p>
      <p className="presentation">
        Method for Design Materialization (Khaled and Barr, 2023)
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <p className="presentation">Find out more at {"\0"}</p>
        <p
          className="presentation refsurf-control"
          style={{ color: "yellow" }}
          onClick={() => {
            window.open("https://gamesasresearch.com");
          }}
        >
          gamesasresearch.com
        </p>
      </div>
    </div>
  );
};

const CreditsScreen = (props) => {
  const [creditsOver, setCreditsOver] = useState(false);
  return (
    <div className="screen-container">
      <Credits onComplete={() => setCreditsOver(true)} />
      {creditsOver && <GamesAsResearch />}
    </div>
  );
};

export default CreditsScreen;
