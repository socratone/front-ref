type CircleIconProps = {
  fill?: string;
};

const CircleIcon = ({ fill }: CircleIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <circle cx="9" cy="9" r="3" fill={fill} />
    </svg>
  );
};

export default CircleIcon;
