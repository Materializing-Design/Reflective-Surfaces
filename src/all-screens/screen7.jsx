import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S7_Femke/Background.jpeg",
  OS: "10",
  windows: [
    {
      layer: 5,
      minimized: false,
      type: "CHROME",
      src: "./S7_Femke/gif.png",
      link: "https://y.yarn.co/7d9a564e-e131-4f7d-9ced-708018d38702_text.gif",
      dimensions: {
        top: 490,
        left: 330,
        width: 464,
        height: 356,
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "CHROME",
      src: "./S7_Femke/blackboard.png",
      dimensions: {
        top: 39,
        left: 352,
        width: 440,
        height: 361,
      },
      map: {
        name: "Screen7Window1",
        areas: [
          {
            id: "824v520v-d001-81fv-0c82-bd24f3fb79f4",
            title: "portal--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [20, 80, 50, 80, 50, 120, 20, 120],
            polygon: [
              [20, 80],
              [50, 80],
              [50, 120],
              [20, 120],
            ],
          },
        ],
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "CHROME",
      src: "./S7_Femke/miro.png",
      link: "https://miro.com/app/board/uXjVNyLKL2M=/",
      dimensions: {
        top: 268,
        left: 33,
        width: 575,
        height: 619,
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "WORD",
      src: "./S7_Femke/word.png",
      dimensions: {
        top: 63,
        left: 620,
        width: 746,
        height: 810,
      },
      map: {
        name: "Screen7Window2",
        areas: [
          {
            id: "824v520v-d82n-81fv-0c82-bd24f3fb79f4",
            title: "autosave--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [40, 15, 240, 15, 240, 60, 40, 60],
            polygon: [
              [40, 15],
              [240, 15],
              [240, 60],
              [40, 60],
            ],
          },
        ],
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "PREVIEW",
      src: "./S7_Femke/haircut.jpeg",
      dimensions: {
        top: 600,
        left: 1154,
        width: 435,
        height: 245,
      },
    },
  ],
  dock_icons: [],
};

const Screen7 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(6);
    GameMan.Narrate(6);
  }, []);

  return <Screen state={DEFAULT_STATE} backgroundColor={"#000"} />;
};

export default Screen7;
