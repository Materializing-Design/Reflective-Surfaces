import "../stylesheets/MacDock.css";
import useMousePosition from "../customHooks/useMousePosition";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import { useContext, useState } from "react";
import GameManager from "../managers/GameManager";

const ICON_LOCATIONS = {
  FIREFOX: "./Icons/firefox.png",
  CHROME: "./Icons/chrome.png",
  FINDER: "./Icons/finder.png",
  GITHUB: "./Icons/github.png",
  VSCODE: "./Icons/vscode.png",
  PREVIEW: "./Icons/preview.png",
  HD: "./Icons/macintosh_hd.png",
  MAIL: "./Icons/mail.png",
  BLENDER: "./Icons/blender.png",
  CALENDAR: "./Icons/calendar.png",
  MUSIC: "./Icons/apple_music.png",
  PAGES: "./Icons/pages.png",
  VOICEMEMO: "./Icons/voice_memos.png",
  ZOOM: "./Icons/zoom.png",
  ZOTERO: "./Icons/zotero.png",
  GARAGEBAND: "./Icons/garage_band.png",
  TEXTEDIT: "./Icons/textedit.png",
  DISCORD: "./Icons/discord.png",
  OBSIDIAN: "./Icons/obsidian.png",
  RIDER: "./Icons/rider.png",
  SPOTIFY: "./Icons/spotify.png",
  UNITY: "./Icons/unity.png",
  TERMINAL: "./Icons/terminal.png",
  TRASH_EMPTY: "./Icons/trash_empty.png",
  TRASH_FULL: "./Icons/trash_full.png",
};

/**
 * @param {*} props -> {icons}
 * icons: an array of strings containing names same as ICONS_LOCATIONS keys.
 * @returns Dock component for mac
 */
const MacDock = (props) => {
  const [showDock, setShowDock] = useState(false);
  const mousePosition = useMousePosition();
  const windowDimensions = useWindowDimensions();
  const GameMan = useContext(GameManager);

  // These are percentages
  const showDockThreshold = 0.95;
  const hideDockThreshold = 0.9;

  if (
    !showDock && GameMan.activeScreen >= 0 && 
    mousePosition.y / windowDimensions.height > showDockThreshold
  ) {
    setShowDock(true);
  } else if (
    showDock &&
    mousePosition.y / windowDimensions.height < hideDockThreshold
  ) {
    setShowDock(false);
  }

  function anyFinderWindows() {
    for (let index = 0; index < props.icons.length; index++) {
      if (props.icons[index].name == "FINDER") {
        return true;
      }
    }
    return false;
  }

  return showDock ? (
    <div className="dock-container">
      {anyFinderWindows() ? null : <DockIcon src={ICON_LOCATIONS.FINDER} />}

      {props.icons?.map((icon, idx) => (
        <DockIcon
          key={idx}
          src={ICON_LOCATIONS[icon.name]}
          onClick={icon.onClick}
          activeWindow={icon.active}
        />
      ))}

      <div className="divider" />
      {props.trashEmpty ? (
        <DockIcon src={ICON_LOCATIONS.TRASH_EMPTY} />
      ) : (
        <DockIcon src={ICON_LOCATIONS.TRASH_FULL} />
      )}
    </div>
  ) : null;
};

const DockIcon = (props) => {
  return (
    <div className="icon-container">
      <img
        onClick={props.onClick}
        className="icon"
        alt="dock icon"
        src={props.src}
        draggable={false}
      />
      <div
        className="icon-activity-indicator"
        style={{
          backgroundColor: props.activeWindow ? "white" : "transparent",
        }}
      />
    </div>
  );
};

export default MacDock;
