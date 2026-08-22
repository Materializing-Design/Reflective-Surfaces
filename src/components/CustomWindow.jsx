import { useContext, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import ImageMapper from "react-img-mapper";
import GameManager from "../managers/GameManager";
import "../stylesheets/CustomWindow.css";

const CustomWindow = (props) => {
  const GameMan = useContext(GameManager);
  const imgRef = useRef();
  const [dimensions, setDimensions] = useState(props.config.dimensions);

  useEffect(() => {
    const element = imgRef?.current?.firstElementChild;
    element?.setAttribute("draggable", false);
  }, [props.config.minimized]);

  function DragHandler() {
    props.onClick(props.config.layer);
  }

  function DragStopHandler(e, data) {
    props.onDragStop(props.index, data.x, data.y);
  }

  function regionClicked(area, index, e) {
    const title = area.title ?? null;
    if (title != null) {
      if (title.includes("--next")) {
        GameMan.nextScreen();
      } else if (title.includes("--previous")) {
        GameMan.previousScreen();
      } else if (title.includes("--hyperlink")) {
        window.open(area.url ?? "");
      }
    }
  }

  return (
    <>
      {props.config.minimized ? null : (
        <Rnd
          lockAspectRatio={true}
          onDragStart={DragHandler}
          onDragStop={DragStopHandler}
          onResize={(e, d, l, t, p) => {
            setDimensions({
              ...dimensions,
              width: l.clientWidth,
              height: l.clientHeight,
            });
          }}
          default={{
            x: dimensions.left,
            y: dimensions.top,
            width: dimensions.width,
            height: dimensions.height,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "cover",
            zIndex: props.config.layer,
          }}
        >
          <div
            style={{
              backgroundColor: props.config.backgroundcolor ?? "black",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            {/* top bar */}
            <div className="top-bar">
              <WindowControls />
              <p
                style={{
                  color: "white",
                  fontFamily: "monospace",
                  alignSelf: "center",
                  justifySelf: "center",
                  position: "absolute",
                  marginLeft: "32%",
                  textWrap: true,
                }}
              >
                {props.config.title}
              </p>
            </div>

            <p
              style={{
                fontFamily: "monospace",
                color: "white",
                padding: 5,
                fontSize: 12,
              }}
            >
              {props.config.text}
            </p>
          </div>
        </Rnd>
      )}
    </>
  );
};

const WindowControls = (props) => {
  return (
    <div
      style={{
        height: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 20,
          backgroundColor: "#ff5e57",
          marginLeft: 10,
        }}
      />
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 20,
          backgroundColor: "#fdbc2d",
          marginLeft: 8,
        }}
      />
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 20,
          backgroundColor: "#28c840",
          marginLeft: 8,
        }}
      />
    </div>
  );
};

export default CustomWindow;
