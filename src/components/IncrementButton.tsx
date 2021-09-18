import { MouseEventHandler } from "react";

export default ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <div>
    <button
      style={{
        backgroundColor: "#2e1308",
        border: "1px solid #fdf9ee",
        borderRadius: ".25rem",
        color: "#fdf9ee",
        margin: "1.5rem 0",
        padding: "1.5rem 2.5rem",
        fontFamily: "serif",
        fontSize: "1.5rem",
      }}
      onClick={onClick}
    >
      Next
    </button>
  </div>
);
