import React from "react";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <div
      className="home"
      style={{
        background:
          "radial-gradient(circle, rgba(23,174,202,1) 0%, rgba(148,165,233,1) 100%)",
      }}
    >
      <div className="container mx-auto px-1">
        <Hero />
      </div>
    </div>
  );
}