<template>
<div class="products p-4 mt-3">
  <h4 class="pt-3 text-left font-weight-bold">
    Products
    <transition name="fade">
      <router-link to="/add"><b-button v-b-modal.addproduct class="font-weight-bold float-right" variant="warning">
      Create New <font-awesome-icon :icon="['fas', 'plus-square']" />
      </b-button></router-link>
    </transition>
  </h4>
  <table cellspacing="0" cellpadding="0" class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Image</th>
        <th scope="col">Product</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope= "col"></th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr class="text-center">
        <th scope="row">1</th>
        <td><p class="text-center"><img src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
            style="max-width: 10rem; max-height: 5rem;"
            class=" ml-auto mr-auto bg-light" /></p></td>
        <td><p class="d-inline">MDL-072 TPA3116D2 XH-M543 2x120W CLASS D</p>
        </td>
        <td class="font-weight-bold text-center" ><p style="font-size: 16px;">Rp. 8.999.999</p></td>
        <td class=" text-center"><b-badge variant="warning" style="color: white; font-size: 13px;">10 Items left</b-badge></td>
      </tr> -->
      <tr class="text-center" v-for="(product, i) in products" :key="i">
        <th scope="row">{{i+1}}</th>
        <td><p class="text-center"><img :src="product.image_url"
          style="max-width: 10rem; max-height: 5rem;"
          class=" ml-auto mr-auto bg-light" /></p></td>
        <td><p class="text-center font-weight-bold">{{product.name}}</p>
        </td>
          <td class="font-weight-bold text-center" ><p style="font-size: 16px;">${{product.price}}.00</p></td>
        <td class=" text-center"><b-badge variant="warning" style="color: white; font-size: 20px;">{{product.stock}} Items left</b-badge></td>
        <td>
          <div class="dropdown">
            <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link to="/edit"><a @click="editProduct(product.id, product)" class="dropdown-item" href="#">Edit</a></router-link>
              <a @click="deleteProduct(product.id)" class="dropdown-item" href="#">Delete</a>
            </div>
          </div>
          <!-- <b-dropdown id="dropdown-left" class="" variant="warning">
            <b-button @click="editProduct(product.id, product)">Edit</b-button>
            <b-button @click="deleteProduct(product.id)" >Delete</b-button>
          </b-dropdown> -->
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'productlist',
  data () {
    return {
      prodData: this.products
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    showAddProduct () {
      this.$emit('displayAdd')
    },
    deleteProduct (id) {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        id,
        accessToken
      }
      this.$store.dispatch('deleteProduct', payload)
      this.$store.dispatch('fetchProducts', accessToken)
    },
    fetchProducts () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProducts', accessToken)
    },
    editProduct (id, payload) {
      payload.id = id
      this.$store.dispatch('bindEditForm', payload)
    }
  },
  mounted () {
    this.fetchProducts()
  },
  watch: {
    products: {
      handler: function (val, oldval) {
        this.prodData = this.products
        this.fetchProducts()
      }
    }
  }
}
</script>

<style scoped>
  * {
      font-family: 'Hind Madurai', sans-serif;
    }

  tr td{
    text-align: left;
    max-width:250px;
    font-size: 20px;
  }
</style>
