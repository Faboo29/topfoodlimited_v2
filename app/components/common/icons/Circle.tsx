interface ICircleProps {
  classNames: string[];
  fill?: string;
  scrollSettings?: {
    direction: string;
    speed: number;
  };
}

const Circle = ({
  fill = '#42784f',
  scrollSettings,
  classNames
}: ICircleProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 400 400"
      enableBackground="new 0 0 400 400"
      className={classNames && classNames.join(' ')}
    >
      <g>
        <path
          fill={fill}
          d="M199.583,391.667C93.668,391.667,7.5,305.499,7.5,199.583C7.5,93.668,93.668,7.5,199.583,7.5
		c105.916,0,192.083,86.168,192.083,192.083C391.667,305.499,305.499,391.667,199.583,391.667z M199.583,77.614
		c-67.255,0-121.97,54.714-121.97,121.97s54.714,121.969,121.97,121.969s121.969-54.714,121.969-121.969
		S266.839,77.614,199.583,77.614z"
        />
      </g>
    </svg>
  );
};

export default Circle;
