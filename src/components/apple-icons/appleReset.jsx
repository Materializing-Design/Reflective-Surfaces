import * as React from "react";
import GameManager from "../../managers/GameManager";
const AppleReset = (props) => {
  const GameMan = React.useContext(GameManager);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={18}
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        d="M9.5 18c-2.652 0-4.898-.872-6.74-2.616C.92 13.641 0 11.512 0 9c0-2.513.92-4.64 2.76-6.384C4.603.872 6.849 0 9.5 0c1.366 0 2.672.267 3.919.801a9.01 9.01 0 0 1 3.206 2.293V0H19v7.875h-8.313v-2.25h4.988a6.758 6.758 0 0 0-2.597-2.475c-1.098-.6-2.29-.9-3.578-.9-1.98 0-3.661.656-5.047 1.969C3.068 5.53 2.375 7.125 2.375 9c0 1.875.693 3.469 2.078 4.781C5.84 15.094 7.521 15.75 9.5 15.75c1.524 0 2.9-.412 4.127-1.238 1.227-.825 2.088-1.912 2.582-3.262h2.494c-.554 1.988-1.682 3.61-3.384 4.866C13.617 17.372 11.677 18 9.5 18Z"
      />
    </svg>
  );
};
export default AppleReset;
