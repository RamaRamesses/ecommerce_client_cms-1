<template>
  <div>
      <div class="row mt-2 no-gutters">
        <div class="col-md-2 bg-light">
          <b-list-group class=" list-group-flush pt-2 p-2" style="text-align: left;">
            <b-list-group-item class="bg-warning"><font-awesome-icon :icon="['fas', 'list']" size="1x" /> Categories</b-list-group-item>
            <b-list-group-item><b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio></b-list-group-item>
            <b-list-group-item><b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio></b-list-group-item>
            <b-list-group-item><b-form-radio v-model="selected" name="some-radios" value="C">Option C</b-form-radio></b-list-group-item>
            <b-list-group-item><b-form-radio v-model="selected" name="some-radios" value="D">Option D</b-form-radio></b-list-group-item>
            <b-list-group-item><b-form-radio v-model="selected" name="some-radios" value="E">Option E</b-form-radio></b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-md-10">

          <!-- <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000;"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="First slide"
              img-src="https://picsum.photos/1024/480/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="https://picsum.photos/1024/480/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="https://picsum.photos/1024/480/?image=22"
            ></b-carousel-slide>
          </b-carousel> -->
          <h4 class="text-left font-weight-bold m-4"> Products <b-button class="font-weight-bold float-right" variant="warning">Create New <font-awesome-icon :icon="['fas', 'plus-square']" /></b-button></h4>
          <div class="row mx-auto" style="font-size: 14px;">
            <b-card
              img-src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
              img-alt="Image"
              img-top
              img-height="150px"
              tag="article"
              style="max-width: 15rem; max-height: 18rem;"
              class="ml-2 mr-2 text-left bg-light mb-2"
            >
              <b-card-text class="mt-4">
                <p class=" mb-3">MDL-072 TPA3116D2 XH-M543 2x120W CLASS D</p>
                <p class=" font-weight-bold" style="font-size: 16px;">Rp. 8.999.999</p>
                <b-badge class="" variant="warning" style="color: white; font-size: 13px;">10 Items left</b-badge>
              </b-card-text>
            </b-card>
            <b-card
              img-src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
              img-alt="Image"
              img-top
              img-height="150px"
              tag="article"
              style="max-width: 15rem; max-height: 18rem;"
              class="ml-2 mr-2 text-left bg-light mb-2"
            >
              <b-card-text class="mt-4">
                <p class=" mb-3">MDL-072 TPA3116D2 XH-M543 2x120W CLASS D</p>
                <p class="mb-3 font-weight-bold" style="font-size: 16px;">Rp. 8.999.999</p>
                <p class="mb-2 font-weight-bold text-warning">10 items left</p>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap');
  * {
    font-family: 'Hind Madurai', sans-serif;
  }
  .card p {
    margin-top: -10px;
    margin-bottom: 1px;
  }

  .row .card:hover {
    box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
    transform: scale(1.02);
  }
</style>
