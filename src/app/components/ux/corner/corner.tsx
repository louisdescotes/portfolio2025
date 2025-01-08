type Props = {
  angle: number; 
};

const Corner: React.FC<Props> = ({ angle }) => {
  const transform = `rotate(${angle}, 13.5, 14)`; 

  return (
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Corner SVG</title>
      <g transform={transform}>
        <line
          x1="25"
          y1="27.8887"
          x2="25"
          y2="0.909506"
          stroke="#151414"
          strokeWidth="4"
        />
        <line
          x1="0.020874"
          y1="25.8887"
          x2="27"
          y2="25.8887"
          stroke="#151414"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};

export default Corner;