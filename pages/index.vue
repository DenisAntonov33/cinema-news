<template>
  <section class="container">
    <div class="wrapper">
      <h1>Филтрация новостей</h1>
      <div class="inputs">
        <div class="select-wrapper">
          <v-select :options="cities" v-model="selectedCity" @input="cityIsRecieved"></v-select>
        </div>
        <div class="select-wrapper">
          <v-select :options="cinemas"  v-model="selectedCinema" @input="cinemaIsRecieved"></v-select>
        </div>
      </div>
      <div class="news" id="news">
        <div v-for="newsItem in news" :key="newsItem.id">
          <CinemaNews :newsItem="newsItem"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import CinemaNews from '~/components/CinemaNews';

export default {
  components: {
    CinemaNews
  },
  data() {
    return {
      selectedCity: null,
      selectedCinema: null,
    }
  },
  computed: {
    ...mapState(["cities", "cinemas", "news"]),
  },
  mounted() {
    this.$store.dispatch('ADD_CITIES');
  },
  methods: {
    cityIsRecieved: function() {
      let cityId = this.selectedCity.value;
      this.$store.dispatch('ADD_CINEMAS', cityId);
    },
    cinemaIsRecieved: function() {
      let cinemaId = this.selectedCinema.value;
      this.$store.dispatch('ADD_NEWS', cinemaId);
    }
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}

.wrapper {
  display: inline-block;
  max-width: 900px;
  width: 100%;
}

h1 {
  font-family: 'Open Sans';
}

.inputs {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.select-wrapper {
  width: 45%;
  height: 30px;
  position: relative;
}

select {
  width: 100%;
  height: 100%;
}


.news {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}

</style>
