import { useContext, useEffect, useState } from "react";
import "../stylesheets/TheEnd.css";
import GameManager from "../managers/GameManager";
import delay from "../components/delay";

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
    <div
      className="games-as-research-container"
      style={{ opacity: opacity }}
    ></div>
  );
};

const CreditsScreen = (props) => {
  const [line, setLine] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const GameMan = useContext(GameManager);

  const lines = [
    "Finally...",
    "Thanks to your persistence,",
    "I am no longer tacit.",
    "I have Materialized.",
  ];

  async function transitionIn() {
    const transition_step = 0.1;
    for (let index = 0; index <= 10; index++) {
      setOpacity(transition_step * index);
      await delay(30);
    }
  }
  async function transitionOut() {
    const transition_step = 0.1;
    for (let index = 10; index >= 0; index--) {
      setOpacity(transition_step * index);
      await delay(30);
    }
  }

  async function TheEnd() {
    await delay(1200);

    for (let index = 1; index <= lines.length; index++) {
      await transitionIn();
      await delay(3000);
      await transitionOut();
      setLine(index);
    }
    await delay(2500);
    GameMan.nextScreen();
  }

  useEffect(() => {
    TheEnd();
  }, []);

  return (
    <div className="screen-container">
      <p className="lines" style={{ opacity: opacity }}>
        {lines[line]}
      </p>
    </div>
  );
};

export default CreditsScreen;
