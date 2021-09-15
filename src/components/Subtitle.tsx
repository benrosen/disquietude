import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren<{}>) => (
  <h2
    style={{
      fontFamily: "serif",
      textAlign: "center",
    }}
  >
    {children}
  </h2>
);
