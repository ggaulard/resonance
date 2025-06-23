import React, { type PropsWithChildren } from "react";

import "./button.css";

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean | undefined;
  type: "primary" | "secondary";
}

export function Button({ children, type }: ButtonProps) {
  if (!type || type === "primary") {
    return (
      <button
        style={{
          padding: "15px 40px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "none",
          borderRadius: "30px",
          color: "white",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          opacity: 0,
          transition: "transform 0.3s ease",
        }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      style={{
        padding: "15px 40px",
        background: "linear-gradient(135deg, #667eea, #ec4899)",
        border: "none",
        borderRadius: "30px",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        opacity: 0,
        transition: "transform 0.3s ease",
      }}
    >
      {children}
    </button>
  );
}
