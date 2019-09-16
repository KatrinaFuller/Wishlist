<template>
  <div class="home container-fluid">
    <div class="row">
      <item v-for="item in items" :itemProp="item" :key="item._id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "../components/Item";

export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getItems");
  },
  methods: {},
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
  components: { Item }
};
</script>
