import React from "react";

const serverLocations = [
  { name: "Frankfurt", left: "56%", top: "32%" },
  { name: "London", left: "53%", top: "28%" },
  { name: "New York", left: "23%", top: "33%" },
  { name: "Singapore", left: "80%", top: "62%" },
  { name: "Sydney", left: "89%", top: "80%" },
];

export function WorldMapWithMarkers() {
  return (
    <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: "2/1" }}>
      <img src="/world.svg" alt="World Map" className="w-[75%] h-auto mx-auto" />
      {serverLocations.map((loc) => (
        <div
          key={loc.name}
          className="absolute flex flex-col items-center group"
          style={{ left: loc.left, top: loc.top, transform: "translate(-50%, -50%)" }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
            {loc.name}
          </span>
        </div>
      ))}
    </div>
  );
} 