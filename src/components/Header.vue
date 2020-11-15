<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" size="2x" class="mr-4 ml-5" />
      <b-navbar-brand href="#" class="font-weight-bold">CMS Panel</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-4">
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <font-awesome-icon :icon="['fas', 'user']" size="1x" id="ikon" />
            </template>
            <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .navbar {
  }
</style>
