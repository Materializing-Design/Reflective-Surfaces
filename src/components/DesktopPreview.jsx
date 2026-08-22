import { IoLockClosed } from "react-icons/io5";
import "../stylesheets/DesktopPreview.css";

const Preview = (props) => {
  if (props.locked) {
    return (
      <div className="locked-desktop">
        <IoLockClosed
          color="#656565"
          size={100}
          style={{ alignSelf: "center" }}
        />
      </div>
    );
  }
  return (
    <img
      className="desktop"
      alt="desktop"
      src={props.imgsrc}
      onClick={props.onClick}
    />
  );
};

export default Preview;
