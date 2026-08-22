import { useContext, useEffect, useState } from "react";
import "../stylesheets/TitleScreen.css";
import GameManager from "../managers/GameManager";
import { LOCAL_STORAGE_KEYS } from "../managers/GameManager";
import delay from "../components/delay";
import TypingP from "../components/TypingAnimation";

// Components
const Button = (props) => {
  const [divClass, setDivClass] = useState("button-container");
  const [pClass, setPClass] = useState("button-label");
  function focusing() {
    setDivClass("button-container-focused");
    setPClass("button-label-focused");
  }
  function relaxing() {
    setDivClass("button-container");
    setPClass("button-label");
  }
  return (
    <div
      className={divClass}
      onClick={props.onClick ?? null}
      style={props.style ?? {}}
      onMouseEnter={focusing}
      onMouseLeave={relaxing}
    >
      <p className={pClass}>{props.label}</p>
    </div>
  );
};

const Page0 = (props) => {
  const [opacity, setOpacity] = useState(1);
  const GameMan = useContext(GameManager);

  async function StartHandler() {
    const transition_step = 0.1;
    for (let index = 10; index >= 0; index--) {
      setOpacity(transition_step * index);
      await delay(30);
    }
    await delay(500);
    props.setPage(1);
  }
  function ResumeHandler() {
    for (let index = 0; index <= props.resume; index++) {
      GameMan.unlockScreen(index);
    }
    GameMan.jumpToScreen(props.resume);
  }

  return (
    <div style={{ opacity: opacity }}>
      <p className="tagline">
        If the function of the works we research and design is to provide
        playful experiences then what might it mean to communicate playful form
        in how we disseminate our work?
      </p>
      <Button label={"Start"} onClick={StartHandler} />
      {props.resume > -1 && props.resume <= 8 ? (
        <Button label={"Resume"} onClick={ResumeHandler} />
      ) : null}
    </div>
  );
};

const Page1 = (props) => {
  const [line, setLine] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [buttonOpacity, setButtonOpacity] = useState(0);

  const line1 = "This is a reflection on ";
  const line2 = "This is also an ode to media ";
  const line3 = "And so we ";
  const line4 = "Modify your ";

  const lastLine = 4;
  const lines = [
    [
      "reflective practice in design.",
      "reflective practice in research through design.",
      "how our material conditions support reflective practice in research through design.",
    ],
    [
      "we adopt to articulate design.",
      "we adopt to articulate how we reflect on design.",
      "postures we adopt to articulate how we reflect on design.",
    ],
    [
      "revisited the dialogues we engaged with during the process of design.",
      "reflected on material conditions afforded by our design tools.",
      "realised they do not all invite reflection in equal measure",
    ],
    [
      "material conditions of design practice to invite reflection.",
      "material conditions of articulation of design practice to invite reflection.",
      " articulation of material conditions of design practice to invite reflection.",
    ],
  ];

  async function nextHandler() {
    const transition_step = 0.1;
    for (let index = 10; index >= 0; index--) {
      setOpacity(transition_step * index);
      await delay(30);
    }
    await delay(500);
    props.setPage(2);
  }

  useEffect(() => {
    async function transitionIn() {
      const transition_step = 0.1;
      for (let index = 0; index <= 10; index++) {
        setButtonOpacity(transition_step * index);
        await delay(30);
      }
    }
    if (line == lastLine) {
      transitionIn();
    }
  }, [line]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        opacity: opacity,
      }}
      onClick={() => {
        setLine(line + 1);
      }}
    >
      <TypingP
        text={lines[0]}
        base={line1}
        onComplete={() => {
          setLine(line + 1);
        }}
      />

      {line > 0 && (
        <TypingP
          text={lines[1]}
          base={line2}
          onComplete={() => {
            setLine(line + 1);
          }}
        />
      )}
      {line > 1 && (
        <TypingP
          text={lines[2]}
          base={line3}
          onComplete={() => {
            setLine(line + 1);
          }}
        />
      )}
      {line > 2 && (
        <TypingP
          text={lines[3]}
          base={line4}
          onComplete={() => {
            setLine(lastLine);
          }}
        />
      )}
      <Button
        style={{ opacity: buttonOpacity }}
        label={"Next"}
        onClick={nextHandler}
      />
    </div>
  );
};

const Page2 = (props) => {
  const [line, setLine] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(0);
  const lastLine = 5;

  const GameMan = useContext(GameManager);

  function StartHandler() {
    GameMan.jumpToScreen(0);
  }

  useEffect(() => {
    async function transitionIn() {
      const transition_step = 0.1;
      for (let index = 0; index <= 10; index++) {
        setButtonOpacity(transition_step * index);
        await delay(30);
      }
    }
    if (line == lastLine) {
      transitionIn();
    }
  }, [line]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
      onClick={() => {
        setLine(line + 1);
      }}
    >
      <TypingP
        text={[]}
        base={"Designers are at work... "}
        onComplete={() => {
          setLine(line + 1);
        }}
      />

      {line > 0 && (
        <TypingP
          text={[]}
          base={
            "You have found yourself able to peek into their process unintrusively"
          }
          onComplete={() => {
            setLine(line + 1);
          }}
        />
      )}
      {line > 1 && (
        <TypingP
          text={[]}
          base={
            "This is them at their most vulnerable so be warned: if they feel your presence, they might shut down"
          }
          onComplete={() => {
            setLine(line + 1);
          }}
        />
      )}
      {line > 2 && (
        <TypingP
          text={[]}
          base={"Use your cursor to find portals"}
          onComplete={() => {
            setLine(line + 1);
          }}
        />
      )}
      {line > 3 && (
        <TypingP
          text={[]}
          base={
            "Portals to artefacts, Portals to repositories, Portals forward, and Portals backwards"
          }
          onComplete={() => {
            setLine(line + 1);
          }}
        />
      )}

      <Button
        style={{ opacity: buttonOpacity }}
        label={"Start"}
        onClick={StartHandler}
      />
    </div>
  );
};

const TitleScreen = (props) => {
  const [page, setPage] = useState(0);

  const [activeScreen, setActiveScreen] = useState(-1);

  useEffect(() => {
    try {
      const storage_val = localStorage.getItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX);

      if (storage_val) {
        setActiveScreen(parseInt(storage_val));
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, -1);
      }
    } catch (error) {
      console.error("DEBUG:: Local storage failed.\n" + error);
    }
  }, []);
  return (
    <div className="screen-container">
      <p className="title">Reflective Surfaces</p>
      {page === 0 ? (
        <Page0 setPage={setPage} resume={activeScreen} />
      ) : page === 1 ? (
        <Page1 setPage={setPage} />
      ) : (
        <Page2 setPage={setPage} />
      )}
    </div>
  );
};

export default TitleScreen;
