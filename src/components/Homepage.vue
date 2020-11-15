<template>
  <div>
      <div class="row no-gutters">
        <div class="col-md-2 bg-light" style="height: 1000px;">
          <b-list-group class="list-group list-group-flush pt-2 p-2 mt-3" style="text-align: left;">
            <b-list-group-item @click="showDashboard" id="dashboard" style="border-radius: 50px;" class="mb-2"><font-awesome-icon :icon="['fas', 'tachometer-alt']" size="1x" /> Dashboard</b-list-group-item>
            <b-list-group-item @click="showProducts" id="products" style="border-radius: 50px;" class="mb-2"><font-awesome-icon :icon="['fas', 'archive']" size="1x" /> Products</b-list-group-item>
            <b-list-group-item id="categories" style="border-radius: 50px;" class="mb-2"><font-awesome-icon :icon="['fas', 'list']" size="1x" /> Categories</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-md-10 pt-2 pl-5 pr-5 product-body">
          <transition name="fade">
            <Dashboard v-if="displayDashboard" />
            <AddProduct @showProducts="showProducts" @onsubmit="showProducts" v-if="displayAdd" />
            <ProductList @displayAdd="showAddProduct" @showEditProduct="showEditProduct" v-if="displayProducts" />
            <EditProduct @showProducts="showProducts" @onsubmit="showProducts" v-if="displayEdit" />
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import ProductList from './ProductList.vue'
import EditProduct from './EditProduct.vue'
import Dashboard from './Dashboard.vue'
export default {
  name: 'Homepage',
  data () {
    return {
      selected: '',
      footer: true,
      displayAdd: false,
      displayProducts: false,
      displayEdit: false,
      displayDashboard: true
    }
  },
  created () {
    this.checkCredentials()
  },
  methods: {
    checkCredentials () {
      const accessToken = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')
      if (!accessToken) {
        this.$router.push('/login')
      } else {
        if (role === 'customer') {
          this.$router.push('/login')
        }
      }
    },
    showProducts () {
      this.displayAdd = false
      this.displayProducts = true
      this.displayEdit = false
      this.displayDashboard = false
    },
    showAddProduct () {
      this.displayAdd = true
      this.displayProducts = false
      this.displayEdit = false
    },
    showEditProduct () {
      this.displayAdd = false
      this.displayProducts = false
      this.displayEdit = true
    },
    showDashboard () {
      this.displayAdd = false
      this.displayProducts = false
      this.displayEdit = false
      this.displayDashboard = true
    }
  },
  components: {
    AddProduct,
    ProductList,
    EditProduct,
    Dashboard
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap');
  * {
    font-family: 'Hind Madurai', sans-serif;
  }

  body {
     background-color: #ffffff;
  }

  #products:hover {
    background-color: #FFC107;
  }

  #categories:hover {
    background-color: #FFC107;
  }

  #dashboard:hover {
    background-color: #FFC107;
  }

  .fade-enter-active, .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }

  table {
    border: none !important;
  }

  .product-body{
    background-color: #E7EDF6;
  }

  .list-group{
    padding: 5;
  }

  .products{
    background-color: #FFFFFF;
    border-radius: 15px;
  }

  .card p {
    margin-top: -10px;
    margin-bottom: 1px;
  }

  .row .card:hover {
    box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
    transform: scale(1.02);
  }

  tr td{
    text-align: left;
    max-width:250px;
  }

</style>
