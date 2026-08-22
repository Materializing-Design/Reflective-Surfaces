import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S6_Enric/Background.jpg",
  OS: "10",
  windows: [
    {
      layer: 6,
      minimized: false,
      type: "CHROME",
      src: "./S6_Enric/docs2.png",
      dimensions: {
        top: 30,
        left: 1123,
        width: 528,
        height: 862,
      },
    },
    {
      layer: 5,
      minimized: false,
      type: "CHROME",
      src: "./S6_Enric/docs1.png",
      dimensions: {
        top: 30,
        left: 532,
        width: 576,
        height: 862,
      },
      map: {
        name: "Screen6Window1",
        areas: [
          {
            id: "824v520v-d82n-81bv-0c82-bd24f3fb79f4",
            title: "all-the-time--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [680, 490, 1400, 490, 1400, 550, 680, 550],
            polygon: [
              [680, 490],
              [1400, 490],
              [1400, 550],
              [680, 550],
            ],
          },
        ],
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic3.png",
      dimensions: {
        top: 20,
        left: 42,
        width: 188,
        height: 529,
      },
      map: {
        name: "Screen6Window2",
        areas: [
          {
            id: "824v520v-d82n-81fv-0c82-bd24f3fb79f4",
            title: "portal--hyperlink",
            url: "https://enric.llagostera.com.br/dreaming-gargoyle/",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [150, 180, 260, 180, 260, 290, 150, 290],
            polygon: [
              [150, 180],
              [260, 180],
              [260, 290],
              [150, 290],
            ],
          },
        ],
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic2.png",
      dimensions: {
        top: 100,
        left: 192,
        width: 408,
        height: 412,
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic4.png",
      dimensions: {
        top: 200,
        left: 44,
        width: 415,
        height: 486,
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic1.png",
      dimensions: {
        top: 333,
        left: 461,
        width: 499,
        height: 387,
      },
      map: {
        name: "Screen6Window3",
        areas: [
          {
            id: "824v520v-d8dd-81bv-0c82-bd24f3fb79f4",
            title: "portal--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [700, 440, 880, 440, 880, 620, 700, 620],
            polygon: [
              [700, 440],
              [880, 440],
              [880, 620],
              [700, 620],
            ],
          },
        ],
      },
    },
  ],
  dock_icons: [],
};

const Screen6 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.unlockScreen(5);
    GameMan.Narrate(5);
  }, []);

  return <Screen state={DEFAULT_STATE} backgroundColor={"#1A355B"}/>;
};

export default Screen6;
