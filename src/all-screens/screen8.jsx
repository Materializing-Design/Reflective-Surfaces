import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S8_Vadim/Background.jpeg",
  OS: "10",
  windows: [
    {
      layer: 6,
      minimized: false,
      type: "WORD",
      src: "./S8_Vadim/word1.png",
      dimensions: {
        top: 82,
        left: 891,
        width: 658,
        height: 759,
      },
      map: {
        name: "Screen8Window6",
        areas: [
          {
            id: "824v520v-d82n-81fv-0d82-bd24f3fb79f4",
            title: "autosave--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [60, 15, 200, 15, 200, 45, 60, 45],
            polygon: [
              [60, 15],
              [200, 15],
              [200, 45],
              [60, 45],
            ],
          },
        ],
      },
    },
    {
      layer: 5,
      minimized: false,
      type: "WORD",
      src: "./S8_Vadim/word2.png",
      dimensions: {
        top: 140,
        left: 624,
        width: 596,
        height: 686,
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "UNITY",
      src: "./S8_Vadim/unity.png",
      dimensions: {
        top: 404,
        left: 326,
        width: 521,
        height: 361,
      },
      map: {
        name: "Screen8Window4",
        areas: [
          {
            id: "8240850v-d8fN-81fv-0d82-bd24f3fb79f4",
            title: "unity-play--hyperlink",
            url: "https://zolarsystems.itch.io/soundgarden",
            shape: "poly",
            name: "3",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [700, 70, 830, 70, 830, 100, 700, 100],
            polygon: [
              [700, 70],
              [830, 70],
              [830, 100],
              [700, 100],
            ],
          },
        ],
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "EDGE",
      src: "./S8_Vadim/trello.png",
      dimensions: {
        top: 82,
        left: 326,
        width: 476,
        height: 598,
      },
      map: {
        name: "Screen8Window3",
        areas: [
          {
            id: "824v520v-d82N-81fv-0d82-bd24f3fb79f4",
            title: "jira--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [950, 710, 1150, 710, 1150, 750, 950, 750],
            polygon: [
              [950, 710],
              [1150, 710],
              [1150, 750],
              [950, 750],
            ],
          },
          {
            id: "824vff0v-d8fN-81fv-0d82-bd24f3fb79f4",
            title: "trello-link--hyperlink",
            url: "https://trello.com/c/vgg4r0Tq",
            shape: "poly",
            name: "2",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [210, 160, 1185, 160, 1185, 300, 210, 300],
            polygon: [
              [210, 160],
              [1185, 160],
              [1185, 300],
              [210, 300],
            ],
          },

          {
            id: "824iff0v-d8fN-81fv-0d82-bd24f3fb79f4",
            title: "trello-link--hyperlink",
            url: "https://trello.com/b/2r2i7bm1/zolar-public",
            shape: "poly",
            name: "3",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [180, 50, 780, 50, 780, 100, 180, 100],
            polygon: [
              [180, 50],
              [780, 50],
              [780, 100],
              [180, 100],
            ],
          },
        ],
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "GITKRAKEN",
      src: "./S8_Vadim/gitKraken.png",
      dimensions: {
        top: 216,
        left: 87,
        width: 492,
        height: 304,
      },
      map: {
        name: "Screen8Window2",
        areas: [
          {
            id: "824080v-d8fN-81fv-0d82-bd2fb79f4",
            title: "githubpages--hyperlink",
            url: "https://videon.github.io/soundgarden/",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [425, 65, 610, 65, 610, 105, 425, 105],
            polygon: [
              [425, 65],
              [610, 65],
              [610, 105],
              [425, 105],
            ],
          },
          {
            id: "824080v-d8fN-81fv-0d82-bi2cb79f4",
            title: "github-profile--hyperlink",
            url: "https://github.com/Videon",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [930, 400, 1190, 400, 1190, 480, 930, 480],
            polygon: [
              [930, 400],
              [1190, 65],
              [1190, 480],
              [930, 480],
            ],
          },
        ],
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "RIDER",
      src: "./S8_Vadim/ryder.png",
      dimensions: {
        top: 550,
        left: 86,
        width: 490,
        height: 290,
      },
    },
  ],
  dock_icons: [],
};

const Screen8 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(7);
    GameMan.Narrate(7);
  }, []);

  return (
    <>
      <Screen state={DEFAULT_STATE} backgroundColor={"#7A5C10"} />
    </>
  );
};

export default Screen8;
