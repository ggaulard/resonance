import React, { type PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

export function Container({ children }: ContainerProps) {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: "#1b151e",
        color: "#ffffff",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        minHeight: "100vh",
        overflow: "hidden",
        margin: "-8px",
      }}
    >
      <div
        style={{
          padding: "40px 30px",
          position: "relative",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
