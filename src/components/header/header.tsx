import React, { type PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  type?: "h1" | "h2";
}

export function Header({ type, children }: ContainerProps) {
  if (!type || type == "h1") {
    return (
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "200",
          background: "linear-gradient(135deg, #667eea 0%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </h1>
    );
  } else if (type == "h2") {
    return (
      <h2
        style={{
          fontSize: "20px",
          color: "#888",
          marginBottom: "10px",
          letterSpacing: "1px",
        }}
      >
        {children}
      </h2>
    );
  }
}
