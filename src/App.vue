<template>
  <h3>{{ from }}</h3>
  <counter></counter>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  name: "App",
  components: {
    Counter,
  },
  data() {
    return {
      from: "Parent Container",
    };
  },
};
</script>
