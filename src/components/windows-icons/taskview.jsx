import * as React from "react";
import GameManager from "../../managers/GameManager";
const TaskView = (props) => {
  const GameMan = React.useContext(GameManager);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={15}
      fill="none"
      className="refsurf-control"
      onClick={GameMan.showSwitcher}
      {...props}
    >
      <path
        stroke="#fff"
        d="M10.5 15v-3M10 12.5H1M.5 15v-3M.5 4.5h10v6H.5zM.5 0v3M1 2.5h9M10.5 0v3M14.5 0v15"
      />
      <path fill="#fff" d="M13 4h3v3h-3z" />
    </svg>
  );
};
export default TaskView;
