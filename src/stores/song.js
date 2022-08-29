import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "song",
  state: () => ({
    currentSong: "This I Love",
  }),
});
