import AppleIcon from "./apple-icons/appleIcon";
import ControlCenter from "./apple-icons/controlCenter";
import AppleReset from "./apple-icons/appleReset";
import DesktopViewer from "./apple-icons/desktopViewer";

import "../stylesheets/MacMenuBar.css";
import { useContext } from "react";
import GameManager from "../managers/GameManager";

const MacMenuBar = (props) => {
  const GameMan = useContext(GameManager);

  return (
    <div
      className="menubar-container"
      style={
        props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
      }
    >
      <div className="menubar-leftside">
        <AppleIcon
          onClick={() => {
            window.location.reload();
          }}
          className={"refsurf-control"}
        />
        <p className="menubar-program">Finder</p>
        <p className="menubar-item">File</p>
        <p className="menubar-item">Edit</p>
        <p className="menubar-item">View</p>
        <p className="menubar-item">Go</p>
        <p className="menubar-item">Window</p>
        <p className="menubar-item refsurf-control" onClick={GameMan.SendHelp}>
          Help
        </p>
      </div>

      <div className="menubar-rightside">
        <DesktopViewer />
        <div style={{ width: 20 }} />
        <ControlCenter />
        <div style={{ width: 20 }} />

        <MacDateTime />
      </div>
    </div>
  );
};

const MacDateTime = (props) => {
  return (
    <div className="mac-datetime-container">
      <p className="mac-datetime">Thu Dec 1</p>
      <p className="mac-datetime">10:09</p>
    </div>
  );
};

export default MacMenuBar;
