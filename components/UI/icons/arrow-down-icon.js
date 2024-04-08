function ArrowDownIcon({ color = "#A445ED", className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      className={className}
    >
      <path
        fill="none"
        stroke={color ?? "#A445ED"}
        strokeWidth="1.5"
        d="m1 1 6 6 6-6"
      />
    </svg>
  );
}

export default ArrowDownIcon;
