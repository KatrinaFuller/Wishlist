<template>
  <div class="home container-fluid">
    <div class="row">
      <item v-for="item in items" :itemProp="item" :key="item._id" />Testing
      <div class="col-12 pt-5">
        <CreateItemModal />
        <button class="btn btn-primary" data-toggle="modal" data-target="#create-car-modal">Add item</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "../components/Item";
import CreateItemModal from "../components/CreateItemModal";

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
  components: { Item, CreateItemModal }
};
</script>
