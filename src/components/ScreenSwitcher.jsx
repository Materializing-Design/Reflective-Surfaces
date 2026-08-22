import { useCallback, useEffect } from "react";
import Preview from "./DesktopPreview";
import { animated, useSpring } from "@react-spring/web";
import "../stylesheets/ScreenSwitcher.css";

const ScreenSwitcher = (props) => {
  const spring = useSpring({
    left: props.show ? 0 : window.innerWidth * 5,
  });

  function HandleEscapeHide(e) {
    const { key, keycode } = e;
    if (key === "Escape" || keycode === 27) {
      props.close();
    }
  }

  const keydownCallback = useCallback(HandleEscapeHide, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownCallback);
    return () => {
      window.removeEventListener("keydown", keydownCallback);
    };
  }, [keydownCallback]);

  return (
    <animated.div className="container" style={spring}>
      <div className="screens-grid">
        {props.screens.map((screen, idx) => {
          return (
            <Preview
              key={idx}
              locked={screen.locked}
              onClick={() => props.onClick(idx)}
              imgsrc={screen.thumbnail}
            />
          );
        })}
      </div>
    </animated.div>
  );
};

export default ScreenSwitcher;
