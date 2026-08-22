import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S5_Kalervo/Background.jpeg",
  windows: [
    {
      layer: 3,
      minimized: false,
      type: "TEXTEDIT",
      src: "./S5_Kalervo/discussion.png",
      dimensions: {
        top: 90,
        left: 708,
        width: 797,
        height: 680,
      },
      map: {
        name: "Screen5Window1",
        areas: [
          {
            id: "829f020v-d82n-483f-0c82-bd24f3fb79f4",
            title: "discussions--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [110, 135, 350, 135, 350, 165, 110, 165],
            polygon: [
              [110, 135],
              [350, 135],
              [350, 165],
              [110, 165],
            ],
          },
        ],
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "FIREFOX",
      src: "./S5_Kalervo/docs.png",
      dimensions: {
        top: 90,
        left: 56,
        width: 713,
        height: 894,
      },
      map: {
        name: "Screen5Window2",
        areas: [
          {
            id: "829f020v-d82n-81bv-0c82-bd24f3fb79f4",
            title: "discussions--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [30, 100, 70, 100, 70, 165, 30, 165],
            polygon: [
              [30, 100],
              [70, 100],
              [70, 165],
              [30, 165],
            ],
          },
        ],
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "DISCORD",
      src: "./S5_Kalervo/discord_rilla.png",
      dimensions: {
        top: 205,
        left: 750,
        width: 683,
        height: 751,
      },
    },
  ],
  dock_icons: ["SPOTIFY"],
};

const Screen5 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.unlockScreen(4);
    GameMan.Narrate(4);
  }, []);
  return <Screen state={DEFAULT_STATE} backgroundColor={"#88C6FF"}/>;
};

export default Screen5;
