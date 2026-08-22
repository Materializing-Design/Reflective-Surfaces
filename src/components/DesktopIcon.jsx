import { Rnd } from "react-rnd";
import "../stylesheets/DesktopIcon.css";
const DesktopIcon = (props) => {
  return (
    <Rnd
      default={props.default}
      bounds={"parent"}
      enableResizing={false}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      dragGrid={[50, 50]}
    >
      {/* Make into img component */}
      <img className="icon-sprite" src={props.sprite ?? ""} draggable={false}/>
      <p className="icon-label">{props.label}</p>
    </Rnd>
  );
};

export default DesktopIcon;
