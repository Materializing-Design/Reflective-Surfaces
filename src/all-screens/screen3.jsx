import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S3_Rilla/Background.jpeg",
  windows: [
    {
      layer: 1,
      minimized: true,
      type: "FINDER",
      src: "./S3_Rilla/Closing/file_explorer.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 942,
        height: 227,
      },
    },
    {
      layer: 9,
      minimized: false,
      type: "TEXTEDIT",
      src: "./S3_Rilla/Abstract/abstract.png",
      dimensions: {
        top: 45,
        left: 531,
        width: 867,
        height: 261,
      },
    },
    {
      layer: 8,
      minimized: false,
      type: "CHROME",
      src: "./S3_Rilla/Abstract/docs.png",
      dimensions: {
        top: 436,
        left: 631,
        width: 571,
        height: 508,
      },
    },
    {
      layer: 7,
      minimized: true,
      type: "PREVIEW",
      src: "./S3_Rilla/Abstract/pdf.png",
      dimensions: {
        top: 129,
        left: 384,
        width: 780,
        height: 516,
      },
    },
    // P2
    {
      layer: 6,
      minimized: true,
      type: "DISCORD",
      src: "./S3_Rilla/Closing/discordJoey.png",
      dimensions: {
        top: 129,
        left: 384,
        width: 713,
        height: 613,
      },
    },
    {
      layer: 5,
      minimized: true,
      type: "CHROME",
      src: "./S3_Rilla/Closing/docs_rTd.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 857,
        height: 916,
      },
    },

    {
      layer: 4,
      minimized: false,
      type: "DISCORD",
      src: "./S3_Rilla/Context/discord_matt.png",
      dimensions: {
        top: 107,
        left: 1212,
        width: 695,
        height: 597,
      },
      map: {
        name: "Screen3",
        areas: [
          {
            id: "469f9800-c45a-483f-b13e-bd24f3fb79f4",
            title: "old-messages--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [521, 1550, 1555, 1550, 1555, 1585, 521, 1585],
            polygon: [
              [521, 1550],
              [1555, 1550],
              [1555, 1585],
              [521, 1585],
            ],
          },
          {
            id: "48859794-b30v-483f-b13e-bd24f3fb79f",
            title: "chat-with-chip--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [130, 920, 480, 920, 480, 985, 130, 985],
            polygon: [
              [130, 920],
              [480, 920],
              [480, 985],
              [130, 985],
            ],
          },
        ],
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "CHROME",
      src: "./S3_Rilla/Context/docs_context.png",
      dimensions: {
        top: 296,
        left: 39,
        width: 857,
        height: 916,
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "GITHUB",
      src: "./S3_Rilla/Context/gh_desktop.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 555,
        height: 361,
      },
    },
  ],
  dock_icons: [],
};

const Screen3 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(2);
    GameMan.Narrate(2);

  }, []);

  return <Screen state={DEFAULT_STATE} backgroundColor={"#A8A08D"}/>;
};

export default Screen3;
