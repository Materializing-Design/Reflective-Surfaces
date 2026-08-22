import { useContext, useEffect } from "react";
import Screen from "../components/Screen";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S1_Pippin/Background.png",
  windows: [
    {
      layer: 2,
      type: "CHROME",
      minimized: false,
      src: "./S1_Pippin/github.png",
      dimensions: {
        top: 70,
        left: 800,
        width: 561,
        height: 809,
      },
      map: {
        name: "Screen1Window0",
        areas: [
          {
            id: "65927593-c45a-483f-95d3-bd24f3fb79f4",
            title: "git-repository--hyperlink",
            url: "https://github.com/pippinbarr/v-r-5/commits/main/?after=2d4f28514565a9c5bd5d284765dc19cfbf10f2ac+82",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [290, 110, 640, 110, 640, 195, 290, 195],
            polygon: [
              [290, 110],
              [640, 110],
              [640, 195],
              [290, 195],
            ],
          },
          {
            id: "65927593-c45a-483f-95d3-bd24f40b79f4",
            title: "why-v3--hyperlink",
            url: "https://github.com/pippinbarr/v-r-5/commit/8ee6d986d14de13f946d43198a4743fde96af825",
            shape: "poly",
            name: "2",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [45, 420, 1421, 420, 1421, 580, 45, 580],
            polygon: [
              [45, 420],
              [1421, 420],
              [1421, 580],
              [45, 580],
            ],
          },
          {
            id: "65927593-c45a-483f-20d3-bd24f40b79f4",
            title: "further-rooms--hyperlink",
            url: "https://github.com/pippinbarr/v-r-5/commit/e81a57a57e6a5f3edee43adf70646d7efec32b2f",
            shape: "poly",
            name: "2",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [45, 710, 1421, 710, 1421, 930, 45, 930],
            polygon: [
              [45, 710],
              [1421, 710],
              [1421, 930],
              [45, 930],
            ],
          },
        ],
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "VSCODE",
      src: "./S1_Pippin/vscode.png",
      dimensions: {
        top: 70,
        left: 116,
        width: 590,
        height: 847,
      },
      map: {
        name: "Screen1Window1",
        areas: [
          {
            id: "469f9800-c45a-483f-b13e-bd24f3fb79f4",
            title: "git-commit--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [140, 665, 520, 665, 520, 725, 140, 725],
            polygon: [
              [140, 665],
              [520, 665],
              [520, 725],
              [140, 725],
            ],
          },
          {
            id: "469f9800-c45a-483f-b13e-pp24f3fb79f4",
            title: "commit-details--hyperlink",
            url: "https://github.com/pippinbarr/v-r-5/blob/c6537d1a46e68e5ce72fc9285442f63fc2278501/process/journal.md?plain=1#L723",
            shape: "poly",
            name: "2",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [780, 90, 1080, 90, 1080, 160, 780, 160],
            polygon: [
              [780, 90],
              [1080, 90],
              [1080, 160],
              [780, 160],
            ],
          },
        ],
      },
    },
  ],
  dock_icons: ["UNITY"],
};

const Screen1 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.Narrate(0);
  }, []);
  return <Screen state={DEFAULT_STATE} backgroundColor={"#C3A4A4"} />;
};

export default Screen1;
