<template>
  <div class="text-center login-form">
      <b-card
        title="Admin"
        tag="article"
        style="min-width: 355px; border-radius: 5px; min-height: 425px;"
        class="mb-2 login-card">
        <b-card-text>
          <form>
              <!-- <img class="mt-4 mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"> -->
              <label class="sr-only" for="emailAddress">Email Address</label>
              <font-awesome-icon :icon="['fas', 'user']" size="2x" id="ikon" />
              <input v-model="email" type="email" id="emailAddress" class="form-control" placeholder="Email Address" required>
              <label class="sr-only" for="password">Password</label>
              <input v-model="password" type="password" id="password" class="form-control" placeholder="Password" required>
              <br>
              <section class="buttons">
                <div class="mt-3">
                    <button @click.prevent="login" class="btn btn-primary btn-block bg-warning">Sign In</button>
                </div>
              </section>
          </form>
        </b-card-text>
      </b-card>
    </div>
</template>

<script>
import axios from '@/axios/axiosInstance.js'
export default {
  name: 'LoginCMS',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: '/login',
        data: { email: this.email, password: this.password }
      })
        .then(response => {
          localStorage.setItem('role', response.data.role)
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>
<style scoped>
  .login-form{
    display: flex;
    flex-direction:row-reverse;
    margin-top: 100px;
  }

  .login-card {
    margin-right: 180px;
    background-color: #FFFFFF;
    border: 5px solid #e2e2e2;
  }

  form img {
    height: 45px;
    width: 45px;
  }

  #ikon {
    margin: 15px;
  }

  .buttons div button {
    font-size: 15px;
    color: black;
    border: 0;
  }

  input {
    margin: 5px;
  }
</style>
