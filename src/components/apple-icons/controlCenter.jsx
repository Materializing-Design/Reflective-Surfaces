import * as React from "react";
const ControlCenter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M4.065 8.87a4.065 4.065 0 1 0 0 8.13h10.87a4.065 4.065 0 0 0 0-8.13H4.065Zm10.755 6.652c1.47 0 2.66-1.159 2.66-2.587 0-1.429-1.19-2.587-2.66-2.587-1.469 0-2.66 1.158-2.66 2.587 0 1.428 1.191 2.587 2.66 2.587Z"
      clipRule="evenodd"
    />
    <rect width={18} height={7.13} x={0.5} y={0.5} stroke="#000" rx={3.565} />
    <ellipse cx={4.18} cy={4.065} fill="#000" rx={2.66} ry={2.587} />
  </svg>
);
export default ControlCenter;
