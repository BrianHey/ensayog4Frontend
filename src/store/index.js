import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
  },
  mutations: {
    GET_PRODUCTS(state, productos) {
      state.productos = productos;
    },
  },
  actions: {
    async addProduct(context, instrument) {
      const { data } = await axios.post(
        "https://us-central1-crud-vue-firebase-3af18.cloudfunctions.net/instrument/instrument",
        instrument
      );
    },

    async getProducts({ commit }) {
      const { data } = await axios.get(
        "https://us-central1-crud-vue-firebase-3af18.cloudfunctions.net/instrument/instruments"
      );

      const productos = data;

      commit("GET_PRODUCTS", productos);
    },
  },

  getters: {
    getProductsData: (state) => {
      let productos = state.productos.map((p) => p.data);
      return productos;
    },
  },
  modules: {},
});
