import { useContext } from "react";

import Screen1 from "../all-screens/screen1";
import Screen2 from "../all-screens/screen2";
import Screen3 from "../all-screens/screen3";
import Screen4 from "../all-screens/screen4";
import Screen5 from "../all-screens/screen5";
import Screen6 from "../all-screens/screen6";
import Screen7 from "../all-screens/screen7";
import Screen8 from "../all-screens/screen8";
import Screen9 from "../all-screens/screen9";
import GameManager from "./GameManager";
import TitleScreen from "../all-screens/TitleScreen";
import CreditsScreen from "../all-screens/CreditsScreen";
import Ending from "../all-screens/TheEnd";

const ScreensManager = (props) => {
  const GameMan = useContext(GameManager);

  switch (GameMan.activeScreen) {
    case 0:
      return <Screen1 />;
    case 1:
      return <Screen2 />;
    case 2:
      return <Screen3 />;
    case 3:
      return <Screen4 />;
    case 4:
      return <Screen5 />;
    case 5:
      return <Screen6 />;
    case 6:
      return <Screen7 />;
    case 7:
      return <Screen8 />;
    case 8:
      return <Screen9 />;
    case 9:
      return <Ending />;
    case 10:
      return <CreditsScreen />;
    default:
      return <TitleScreen />;
  }
};

export default ScreensManager;
