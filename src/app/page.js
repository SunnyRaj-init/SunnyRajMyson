"use client";
import AnimatedText from "./Components/AnimatedText";
export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5vh",
          flexDirection: "column",
        }}
      >
        <AnimatedText text="Yoi!" size="4" color="teal" />
      </div>
    </div>
  );
}
