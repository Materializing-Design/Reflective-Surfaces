import * as React from "react";
import GameManager from "../../managers/GameManager";
const DesktopViewer = (props) => {
  const GameMan = React.useContext(GameManager);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={18}
      className="refsurf-control"
      fill="none"
      onClick={GameMan.showSwitcher}
      {...props}
    >
      <rect
        width={9.667}
        height={12.823}
        x={17.333}
        y={3.118}
        stroke="#000"
        strokeWidth={2}
        rx={3}
      />
      <rect
        width={12}
        height={7.529}
        x={1}
        y={1}
        stroke="#000"
        strokeWidth={2}
        rx={3}
      />
      <rect
        width={9.667}
        height={5.412}
        x={3.333}
        y={11.588}
        stroke="#000"
        strokeWidth={2}
        rx={2.706}
      />
    </svg>
  );
};
export default DesktopViewer;
