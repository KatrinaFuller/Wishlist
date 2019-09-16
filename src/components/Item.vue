<template>
  <div class="item col-3 border rounded" @click="viewItem()">
    <img :src="itemProp.imgUrl" />
  </div>
</template>


<script>
export default {
  name: "item",
  props: ["itemProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewItem() {
      this.$router.push({
        name: "item",
        params: { itemId: this.itemProp._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>