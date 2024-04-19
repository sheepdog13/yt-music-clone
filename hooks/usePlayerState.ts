import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  activeSong?: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];
  // 기능들 (재생,다음곡,이전곡)
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (prev) => set({ isVisiblePlayer: !prev }),
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  addSongList: (songList: Song[]) =>
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSongList = [...songList];
      const activeSong = cloneSongList.splice(0, 1)?.[0];
      return {
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        activeSong,
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    }),
  playNext: () =>
    set((prev) => {
      const activeSong = prev.activeSong;
      const nextSong = prev.nextPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: nextSong,
        prevPlayerQueue: activeSong
          ? [activeSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: prev.nextPlayerQueue,
      };
    }),
  playBack: () =>
    set((prev) => {
      const activeSong = prev.activeSong;
      const nextSong = prev.prevPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: nextSong,
        nextPlayerQueue: activeSong
          ? [activeSong, ...prev.nextPlayerQueue]
          : prev.nextPlayerQueue,
        prevPlayerQueue: prev.prevPlayerQueue,
      };
    }),
}));

export default usePlayerState;
