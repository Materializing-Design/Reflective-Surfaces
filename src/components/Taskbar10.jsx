import "../stylesheets/Taskbar10.css";
import Windows10Logo from "./windows-icons/windows10";
import WindowsSearch from "./windows-icons/windowsSearch";
import TaskView from "./windows-icons/taskview";
import WindowsMore from "./windows-icons/windowsMore";
import Windows10Charging from "./windows-icons/windows10Charging";
import Windows10Wifi from "./windows-icons/windows10Wifi";
import WindowsMute from "./windows-icons/windowsMute";
import Windows10Notifications from "./windows-icons/windows10Notification";
import { useContext } from "react";
import GameManager from "../managers/GameManager";
const Taskbar10 = (props) => {
  return (
    <div
      className="taskbar-container"
      style={
        props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
      }
    >
      <div className="taskbar-leftside">
        <Windows10Logo />
        <SearchBar />
        <TaskView />
      </div>
      <div className="taskbar-rightside">
        <WindowsMore />
        <Windows10Charging />
        <Windows10Wifi />
        <WindowsMute />
        <p className="date-time">ENG</p>
        <p className="date-time">{"10:09"}</p>
        <p className="date-time">01/12/2022</p>
        <Windows10Notifications />
      </div>
    </div>
  );
};

const SearchBar = (props) => {
  const GameMan = useContext(GameManager);

  return (
    <div
      className="refsurf-control search-bar-container"
      onClick={GameMan.SendHelp}
    >
      <WindowsSearch />
      <p className="search-bar-text">Click here for help</p>
    </div>
  );
};

export default Taskbar10;
