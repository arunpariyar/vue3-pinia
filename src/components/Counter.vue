<template>
  <h2>Counter Component</h2>
  <button @click.prevent="addCounter">Add</button>
  <h2>{{ this.counterStore.counter }}</h2>
  <button @click.prevetn="subCounter">Substract</button>
</template>
<script>
import { mapStores, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
  name: "Counter",
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCounterStore, ["counter"]),
  },
  methods: {
    addCounter() {
      this.counterStore.counter++;
    },
    subCounter() {
      this.counterStore.counter--;
    },
  },
};
</script>
