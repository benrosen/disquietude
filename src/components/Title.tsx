import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren<{}>) => (
  <h1
    style={{
      fontFamily: "serif",
      letterSpacing: ".125rem",
      fontSize: "3rem",
      fontStyle: "italic",
      padding: "1rem",
      textAlign: "center",
    }}
  >
    {children}
  </h1>
);
