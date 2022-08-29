<template>
  <p>Testing</p>
  {{ currentSong }}
</template>
<script>
import { mapStores } from "pinia";
import useSongStore from "@/stores/song";
export default {
  name: "ShowArea",
  computed: {
    ...mapStores(useSongStore),
  },
  date() {
    return {
      currentSong: this.useSongStore.song.currentSong,
    };
  },
};
</script>
