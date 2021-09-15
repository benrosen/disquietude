import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren<{}>) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    {children}
  </div>
);
