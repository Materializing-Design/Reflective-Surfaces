import { useState } from "react";


const ScrenTransition = (props) => {
  return (
    props.alpha != 0 && 
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor:  'rgba(0, 0, 0, ' + props.alpha + ')',
        width: "100%",
        height: "100%",
        zIndex: 99,
      }}
    />
  );
};

export default ScrenTransition;