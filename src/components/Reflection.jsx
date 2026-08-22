import { useEffect, useState } from "react";
import "../stylesheets/Reflection.css";
import delay from "./delay";

// reflection (n.): This is the entity that is guiding you through, this is the entity that has connected you to all these designers.
const Reflection = (props) => {
  // position oscilates between -8vh to 2vh
  const [vertPos, setVertPost] = useState(-11); //vh

  async function slideIn() {
    const maxHeight = 2; //vh
    const step = 0.1;
    let newVal = vertPos;

    while (newVal < maxHeight) {
      newVal += step;
      setVertPost(newVal);
      await delay(2);
    }
  }

  async function slideOut() {
    const minHeight = -11; //vh
    const step = 0.1;
    let newVal = vertPos;

    while (newVal > minHeight) {
      newVal -= step;
      setVertPost(newVal);
      await delay(2);
    }
  }

  async function closeSlider() {
    props.setShow(false);
  }

  useEffect(() => {
    if (props.show) {
      slideIn();
    } else {
      slideOut();
    }
  }, [props.show]);

  return (
    <div
      className="reflection-container"
      style={{
        top: vertPos + "vh",
        borderWidth: props.show ? 1 : 0,
        borderStyle: "solid",
        borderColor: "white",
      }}
      onClick={closeSlider}
    >
      <p className="body-text">{props.message}</p>
    </div>
  );
};

export default Reflection;
