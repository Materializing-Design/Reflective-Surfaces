import AnimatedCursor from "react-animated-cursor";

const ReflectiveCursor = (props) => {
  return (
    <AnimatedCursor
      showSystemCursor={false}
      innerSize={20}
      outerSize={20}
      color="193, 11, 111"
      outerAlpha={0.5}
      innerScale={0}
      outerScale={3}
      trailingSpeed={5}
      clickables={["map", ".refsurf-control"]}
    />
  );
};

export default ReflectiveCursor;