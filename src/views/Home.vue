<template>
  <div class="home">
    <!-- <HelloWorld :cek="25" msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Homepage />
  </div>
</template>

<script>
// @ is an alias to /src'
import Header from '@/components/Header.vue'
import Homepage from '@/components/Homepage.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Homepage
  }
}
</script>
