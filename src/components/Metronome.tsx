import React, { useState, useEffect } from "react";
import { getContrastYIQ } from "@/utils/color-utils";

const Metronome = () => {
  const [bpm, setBpm] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`
  );
  const [fontColor, setFontColor] = useState(getContrastYIQ(backgroundColor));

  useEffect(() => {
    setFontColor(getContrastYIQ(backgroundColor));
  }, [backgroundColor]);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setBackgroundColor(
        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`
      );
      const sound = new Audio("/metronome.wav");
      sound.play();
    }, (60 / bpm) * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [bpm, isPlaying]);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center"
      style={{
        backgroundColor,
        color: fontColor,
      }}
    >
      <div className="pt-40 flex flex-col items-center">
        <h1 className="text-2xl font-medium mb-4">Metronome Online</h1>
        <p className="mb-5">Press start and dance...</p>
        <div className="flex items-center mb-10">
          <label className="mr-2" htmlFor="bpm">
            BPM:
          </label>
          <input
            type="number"
            id="bpm"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="border px-2 py-2 text-black rounded"
            maxLength={3}
            style={{ width: "80px" }}
          />

          <button
            className="ml-2 bg-black text-white py-2 rounded px-4"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Metronome;
