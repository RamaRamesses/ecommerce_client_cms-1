import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(Vuex)
Vue.use(VueSweetalert2)

export const store = new Vuex.Store({
  state: {
    count: 0,
    products: [],
    id: 0,
    name: '',
    image_url: '',
    price: 0,
    stock: 0,
    category: '',
    categories: ['SOFA & CHAIRS', 'LAPTOP & COMPUTERS', 'APPLIANCES', 'HOME ELECTRONICS']
  },
  actions: {
    fetchProducts ({ commit, state }, accessToken) {
      axios({
        method: 'GET',
        url: '/products',
        headers: { access_token: accessToken }
      })
        .then(response => {
          Vue.swal.close()
          commit('SET_PRODUCTS', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct ({ commit }, payload) {
      Vue.swal.showLoading()
      axios({
        method: 'POST',
        url: '/products',
        headers: { access_token: payload.accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(response => {
          Vue.swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product Added!'
          })
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ commit }, payload) {
      Vue.swal.showLoading()
      axios({
        method: 'DELETE',
        url: `products/${payload.id}`,
        headers: { access_token: payload.accessToken }
      })
        .then(response => {
          Vue.swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product Deleted!'
          })
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    bindEditForm ({ commit }, payload) {
      commit('EDIT_PRODUCT', payload)
    },
    bindLastProduct ({ commit }, products) {
      commit('LAST_PRODUCT', products)
    },
    editProduct ({ commit, state }, payload) {
      Vue.swal.showLoading()
      axios({
        method: 'PUT',
        url: `/products/${state.id}`,
        headers: { access_token: payload.accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(response => {
          Vue.swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product Edited!'
          })
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    EDIT_PRODUCT (state, payload) {
      state.id = payload.id
      state.name = payload.name
      state.image_url = payload.image_url
      state.price = payload.price
      state.stock = payload.stock
      state.category = payload.category
    },
    LAST_PRODUCT (state, products) {
      const lastProduct = products[products.length - 1]
      state.name = lastProduct.name
      state.image_url = lastProduct.image_url
      state.price = lastProduct.price
      state.stock = lastProduct.stock
      state.category = lastProduct.category
    }
  }
})
