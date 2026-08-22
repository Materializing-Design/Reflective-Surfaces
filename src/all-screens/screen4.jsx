import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S4_Chip/Background.jpg",
  windows: [
    {
      layer: 4,
      minimized: false,
      type: "TEXTEDIT",
      src: "./S4_Chip/video_transcript.png",
      dimensions: {
        top: 113,
        left: 832,
        width: 836,
        height: 853,
      },
    },
    // {
    //   layer: 4,
    //   custom: true,
    //   minimized: false,
    //   type: "TEXTEDIT",
    //   title: "otter.ai_transcript_of_Voice_Note.txt",
    //   text: "All right, it's February 1 2024.",
    //   dimensions: {
    //     top: 113,
    //     left: 832,
    //     width: 836,
    //     height: 853,
    //   },
    // },
    {
      layer: 3,
      minimized: false,
      type: "FIREFOX",
      src: "./S4_Chip/hiteam.png",
      dimensions: {
        top: 240,
        left: 39,
        width: 678,
        height: 767,
      },
      map: {
        name: "Screen4Window0",
        areas: [
          {
            id: "82034948-c45a-483f-95d3-bd24f3fb79f4",
            title: "google-doc--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [470, 1650, 1000, 1650, 1000, 1690, 470, 1690],
            polygon: [
              [470, 1650],
              [1000, 1650],
              [1000, 1690],
              [470, 1690],
            ],
          },
        ],
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "GARAGEBAND",
      src: "./S4_Chip/audio.png",
      dimensions: {
        top: 59,
        left: 330,
        width: 888,
        height: 399,
      },
      map: {
        name: "Screen4Window1",
        areas: [
          {
            id: "72046284-d82n-483f-0c82-bd24f3fb79f4",
            title: "audiorecording--play",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [1000, 70, 1080, 70, 1080, 170, 1000, 170],
            polygon: [
              [1000, 70],
              [1080, 70],
              [1080, 170],
              [1000, 170],
            ],
          },
        ],
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "DISCORD",
      src: "./S4_Chip/discord_rilla.png",
      dimensions: {
        top: 585,
        left: 717,
        width: 485,
        height: 422,
      },
      map: {
        name: "Screen4Window2",
        areas: [
          {
            id: "72046284-d82n-483f-0c82-bd24f3fb79f4",
            title: "rilla-discord--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [160, 1100, 625, 1100, 625, 1200, 160, 1200],
            polygon: [
              [160, 1100],
              [625, 1100],
              [625, 1200],
              [160, 1200],
            ],
          },
        ],
      },
    },
  ],
  dock_icons: ["PAGES", "MAIL", "BLENDER", "MUSIC", "ZOTERO", "VOICEMEMO"],
};

const Screen4 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(3);
    GameMan.Narrate(3);
  }, []);

  return <Screen state={DEFAULT_STATE} backgroundColor={"#E9B792"} />;
};

export default Screen4;
