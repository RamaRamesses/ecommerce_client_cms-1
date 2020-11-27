<template>
  <div class="products p-4 mt-3">
    <h4 class="pt-3 text-left font-weight-bold">
      Add Product
      <transition name="fade">
        <router-link to="/products"><b-button v-b-modal.addproduct class="font-weight-bold float-right" variant="info">
        Back
        </b-button></router-link>
      </transition>
    </h4>
    <hr>
    <form>
        <div class="form-group text-left">
        <label for="productname">Product Name</label>
        <input v-model="name" type="text" class="form-control" id="productname" placeholder="Enter Product Name">
        </div>
        <div class="form-group text-left">
        <label for="productimage">Image</label>
        <input v-model="image_url" type="type" class="form-control" id="productimage" placeholder="Product Image">
        </div>
        <div class="form-group text-left">
        <label for="category">Category</label>
        <select v-model="category" class="form-control">
            <option v-for="(categori, i) in categories" :key="i" :value="categori">{{categori}}</option>
        </select>
        </div>
        <div class="form-group text-left">
        <label for="price">Price</label>
        <input v-model="price" type="number" class="form-control" id="price" placeholder="Rp.">
        </div>
        <div class="form-group text-left">
        <label for="stock">Stock</label>
        <input v-model="stock" type="number" class="form-control" id="stock" placeholder="Stock">
        </div>
        <button @click.prevent="addProduct" type="submit" class="btn btn-warning btn-block">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addproduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      category: ''
    }
  },
  methods: {
    showProducts () {
      this.$emit('showProducts')
    },
    addProduct () {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category,
        accessToken: accessToken
      }
      this.$store.dispatch('addProduct', payload)
      this.$store.dispatch('fetchProducts', accessToken)
      this.$emit('onsubmit')
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>
  form label {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
  }

  input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: #D7D6D7
  }

  input:focus {
    border-color: green
  }
</style>
