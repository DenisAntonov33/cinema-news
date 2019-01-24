import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
        cities: [],
        cinemas: [],
        news: []
    },
    mutations: {
        ADD_CITIES(state, payload) {
            state.cities = payload;
          },
        ADD_CINEMAS(state, payload) {
            state.cinemas = payload;
        },
        ADD_NEWS(state, payload) {
            console.log(payload);
            state.news = payload;
        },
    },
    actions: {
        ADD_CITIES(context) {
            axios
                .get("http://api.air-sales-api.mt125.mt-pc.ru/v1/city/all")
                .then(response => context.commit("ADD_CITIES", response.data))
                .catch(error => {
                console.log("error :", error);
            });
        },
        ADD_CINEMAS(context, cityId) {
            axios
                .get(`http://api.air-sales-api.mt125.mt-pc.ru/v1/theatre/all?cityId=${cityId}`)
                .then(response => context.commit("ADD_CINEMAS", response.data))
                .catch(error => {
                console.log("error :", error);
            });
        },
        ADD_NEWS(context, cinemaId) {
            axios
                .get(`http://api.air-sales-api.mt125.mt-pc.ru/v1/news/all?theatreId=${cinemaId}`)
                .then(response => context.commit("ADD_NEWS", response.data))
                .catch(error => {
                console.log("error :", error);
            });
        }
    }
  });
};

export default store;