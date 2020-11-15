<template>
  <div class="products p-4 mt-3">
    <h4 class="pt-3 text-left font-weight-bold">
      Add Product
      <transition name="fade">
        <b-button @click="showProducts" v-b-modal.addproduct class="font-weight-bold float-right" variant="info">
        Back
        </b-button>
      </transition>
    </h4>
    <hr>
    <form>
      <div class="form-group text-left">
      <label for="productname">Product Name</label>
      <input v-model="name" type="text" class="form-control" id="productname">
      </div>
      <div class="form-group text-left">
      <label for="productimage">Image</label>
      <input v-model="image" type="type" class="form-control" id="productimage">
      </div>
      <div class="form-group text-left">
      <label for="price">Price</label>
      <input v-model="price" type="number" class="form-control" id="price">
      </div>
      <div class="form-group text-left">
      <label for="stock">Stock</label>
      <input v-model="stock" type="number" class="form-control" id="stock">
      </div>
      <button @click.prevent="submitEdit" type="submit" class="btn btn-warning btn-block">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'editproduct',
  data () {
    return {
    }
  },
  methods: {
    showProducts () {
      this.$emit('showProducts')
    },
    submitEdit () {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        id: this.id,
        name: this.name,
        image_url: this.image,
        price: this.price,
        stock: this.stock,
        accessToken
      }
      this.$store.dispatch('editProduct', payload)
      this.$emit('onsubmit')
    }
  },
  computed: {
    id: {
      get () {
        return this.$store.state.id
      }
    },
    name: {
      get () {
        return this.$store.state.name
      },
      set (newValue) {
        this.$store.state.name = newValue
      }
    },
    image: {
      get () {
        return this.$store.state.image_url
      },
      set (newValue) {
        this.$store.state.image_url = newValue
      }
    },
    price: {
      get () {
        return this.$store.state.price
      },
      set (newValue) {
        this.$store.state.price = newValue
      }
    },
    stock: {
      get () {
        return this.$store.state.stock
      },
      set (newValue) {
        this.$store.state.stock = newValue
      }
    }
  }
}
</script>

<style>

</style>
