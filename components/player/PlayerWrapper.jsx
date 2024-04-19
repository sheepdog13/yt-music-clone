"use client";
import usePlayerState from "@/hooks/usePlayerState";
import React from "react";
import PlayerConent from "./PlayerContent";

const PlayerWrapper = () => {
  const { isVisiblePlayer } = usePlayerState();
  if (!isVisiblePlayer) return null;
  return (
    <div className="fixed bottom-0 w-full h-[72px] bg-neutral-900">
      <PlayerConent />
    </div>
  );
};

export default PlayerWrapper;
