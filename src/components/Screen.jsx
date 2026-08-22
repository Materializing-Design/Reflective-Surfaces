import MacMenuBar from "./MacMenuBar";
import Taskbar10 from "./Taskbar10";
import Window from "./Window";
import { useEffect, useState } from "react";
import "../stylesheets/Screen.css";
import MacDock from "./MacDock";

const MIN_WINDOWS_PER_SCREEN = 3;

/**
 * 
 * @param {*} props = {state, backgroundColor} 
 * state: An object, defined in each screen the describes what the screen will look like 
 * including the Operating System (Windows 10 or MacOS), what dock icons to show, background image, portals,
 * 
 * The `backgroundColor` is a hexCode string that defines the accent color of the action bar (apple) and taskbar (windows). 
 */
const Screen = (props) => {
  const [screenState, setScreenState] = useState(props.state); // uses the DEFAULT_STATE object passed to it, to initialize state. 
  const [dockIcons, setDockIcons] = useState([]);
  const [top, setTop] = useState(
    props.state.windows?.length ?? MIN_WINDOWS_PER_SCREEN
  );

  useEffect(() => {
    const _dockicons = [];
    for (let index = 0; index < screenState.windows.length; index++) {
      _dockicons.push({
        name: screenState.windows[index].type ?? "",
        active: true, // this is to display the activity indicator on the dock/taskbar.
        onClick: () => macDockIconClickHandler(index),
      });
    }

    for (let i = 0; i < props.state.dock_icons?.length; i++) {
      _dockicons.push({
        name: props.state.dock_icons[i],
        active: false,
        onClick: null,
      });
    }

    setDockIcons(_dockicons);
  }, []);

  function changeWindowOrder(window_layer) {
    const new_order = screenState.windows;
    for (let i = 0; i < new_order.length; i++) {
      if (new_order[i].layer === window_layer && new_order[i].layer !== top) {
        new_order[i].layer = top + 1;
        break;
      }
    }
    setTop(top + 1);
    setScreenState({ ...screenState, windows: new_order });
  }
  function macDockIconClickHandler(index) {
    const new_conf = screenState.windows;

    // if corresponding window is not minimized, and not at front, bring to front.
    // if corresponding window is not minimized and at front, minimize.
    // if corresponding window is minimized, maximize.

    if (new_conf[index].minimized) {
      new_conf[index].minimized = false;
      setScreenState({ ...screenState, windows: new_conf });
      changeWindowOrder(screenState.windows[index].layer);
    } else {
      if (screenState.windows[index].layer < top - 1) {
        changeWindowOrder(screenState.windows[index].layer);
      } else {
        new_conf[index].minimized = true;
        setScreenState({ ...screenState, windows: new_conf });
      }
    }
  }
  function updatePosition(index, x, y) {
    const new_conf = screenState.windows;
    new_conf[index].dimensions.top = y;
    new_conf[index].dimensions.left = x;
    setScreenState({ ...screenState, windows: new_conf });
  }

  return (
    <div className="screen-container">
      {/* Top */}
      {screenState.OS ? null : (
        <MacMenuBar backgroundColor={props.backgroundColor ?? null} />
      )}

      {/* Background */}
      <img
        className="background-image"
        style={{
          height: screenState.OS ? "95vh" : "97vh",
        }}
        alt="Screen Background"
        src={screenState.background}
        data-scroll-to="backgroundImage"
        draggable={false}
      />

      {/* Windows */}
      {screenState.windows.map((item, idx) => (
        <Window
          key={idx}
          index={idx}
          config={item}
          onClick={changeWindowOrder}
          onDragStop={updatePosition}
        />
      ))}

      {/* Bottom */}
      {screenState.OS === "10" ? (
        <Taskbar10 backgroundColor={props.backgroundColor ?? null} />
      ) : (
        <MacDock icons={dockIcons} />
      )}
    </div>
  );
};

export default Screen;
