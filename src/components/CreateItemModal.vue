<template>
  <div id="create-item-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create a Wishlist Item!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addItem()">
            <div class="form-group">
              <label for="item">Item Name</label>
              <input
                type="text"
                class="form-control"
                id="item"
                placeholder="Enter name of item"
                v-model="newItem.item"
                required
              />
            </div>
            <div class="form-group">
              <label for="imgurl">Image Url</label>
              <input
                type="text"
                class="form-control"
                id="imgurl"
                placeholder="Enter imgurl"
                v-model="newItem.imgUrl"
              />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="Enter price"
                v-model="newItem.price"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Enter description"
                v-model="newItem.description"
              />
            </div>
            <div class="form-group">
              <label for="store">Store</label>
              <input
                type="text"
                class="form-control"
                id="store"
                placeholder="Enter store to purchase at"
                v-model="newItem.store"
              />
            </div>
            <button type="submit" class="btn btn-primary">List Item</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-item-modal",
  data() {
    return {
      newItem: {}
    };
  },
  computed: {},
  methods: {
    addItem() {
      this.$store.dispatch("addItem", this.newItem);
      this.newItem = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>