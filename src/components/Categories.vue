<template>
<div class="dashboard p-4 mt-3">
  <h2 class="text-left">Categories</h2>
  <hr>
  <div class="d-flex flex-row justify-content-between">
    <div class="col-md-12">
      <p class="pt-3 font-weight-bold">
      <img width="350px" src="https://image.freepik.com/free-vector/warehouse-worker-checking-inventory_3446-395.jpg" />
      </p>
      <h3 class="text-center font-weight-bold"> {{categories}} Categories </h3>
    </div>
  </div>
  <hr>
  <h2 class="mt-5"> Categories </h2>
    <div class="mx-auto mt-4 d-flex flex-row justify-content-center" style="font-size: 14px;">
      <div v-for="product in products" :key="product.id" class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{product.category}}</h5>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Categories',
  methods: {
    fetchProducts () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProducts', accessToken)
    },
    bindLastProduct () {
      console.log(this.products)
      this.$store.dispatch('bindLastProduct', this.products)
    }
  },
  mounted () {
    this.fetchProducts()
    this.bindLastProduct()
  },
  computed: {
    products: {
      get () {
        return this.$store.state.products
      }
    },
    productsLength: {
      get () {
        return this.$store.state.products.length
      }
    },
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
    },
    categories: {
      get () {
        return this.$store.state.categories.length
      }
    }
  }
}
</script>

<style scoped>
  .dashboard{
    background-color: #FFFFFF;
    border-radius: 15px;
  }
</style>
