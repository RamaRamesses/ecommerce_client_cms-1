<template>
<div class="dashboard p-4 mt-3">
  <h2 class="text-left">Dashboard</h2>
  <hr>
  <div class="d-flex flex-row justify-content-between">
    <div class="col-sm-6">
      <p class="pt-3 font-weight-bold">
      <img width="350px" src="https://image.freepik.com/free-vector/warehouse-delivery-workers_3446-396.jpg" />
      </p>
      <h3 class="text-center font-weight-bold"> {{productsLength}} Products </h3>
    </div>
    <div class="col-sm-6">
      <p class="pt-3 font-weight-bold">
      <img width="350px" src="https://image.freepik.com/free-vector/warehouse-worker-checking-inventory_3446-395.jpg" />
      </p>
      <h3 class="text-center font-weight-bold"> {{categories}} Categories </h3>
    </div>
  </div>
  <hr>
  <h2 class="mt-5"> Recent Product </h2>
    <div class="mx-auto mt-4 d-flex flex-row justify-content-center" style="font-size: 14px;">
      <b-card
        :img-src="image"
        img-alt="Image"
        img-top
        img-height="150px"
        tag="article"
        style="max-width: 15rem; max-height: 18rem;"
        class="ml-2 mr-2 text-left bg-light mb-2"
      >
        <b-card-text class="mt-4">
          <p class=" mb-3">{{name}}</p>
          <p class=" font-weight-bold" style="font-size: 16px;">Rp. {{price}}</p>
          <b-badge class="" variant="warning" style="color: white; font-size: 13px;">{{stock}} Items left</b-badge>
        </b-card-text>
      </b-card>
    </div>
</div>
</template>

<script>
export default {
  name: 'dashboard',
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
