import React from "react";

const CustomizeIcon = (props) => {
  const { cx, cy, payload } = props;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <image
        x={-15} // Adjust position as needed
        y={-30} // Adjust position as needed
        width={30}
        height={30}
        href={payload.icon}
      />
    </g>
  );
};

export default CustomizeIcon;
