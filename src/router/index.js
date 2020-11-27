import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import ProductList from '../components/ProductList.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
import Category from '../components/Categories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'Products',
        component: ProductList
      },
      {
        path: 'add',
        name: 'addproduct',
        component: AddProduct
      },
      {
        path: 'edit',
        name: 'editproduct',
        component: EditProduct
      },
      {
        path: 'categories',
        name: 'Category',
        component: Category
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    children: [
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
