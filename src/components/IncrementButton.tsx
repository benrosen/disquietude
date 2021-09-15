import { MouseEventHandler } from "react";

export default ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <div>
    <button
      style={{
        marginBottom: "1rem",
        padding: ".5rem 1rem",
        fontFamily: "serif",
        fontSize: "1rem",
      }}
      onClick={onClick}
    >
      Next
    </button>
  </div>
);
