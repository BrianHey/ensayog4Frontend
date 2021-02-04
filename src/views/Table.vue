<template>
  <div id="app" class="container">
    <!-- <table class="table">
      <thead>
        <th>Id</th>
        <th>Nombre</th>
        <th>Color</th>
        <th>Precio</th>
        <th>Categoria</th>
      </thead>

      <tbody>
        <tr v-for="(producto, i) in productos" :key="i">
          <td>{{ producto.id }}</td>
          <td>{{ producto.data.name }}</td>
          <td>{{ producto.data.color }}</td>
          <td>{{ producto.data.price }}</td>
          <td>{{ producto.data.category }}</td>
        </tr>
      </tbody>
    </table> -->

    <b-table striped hover :items="getProductsData"></b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      productos: {},
    };
  },

 async mounted() {
    await this.getProducts();
  },

  methods: {
    ...mapActions(["getProducts"]),
  },

  computed: {
    ...mapGetters(["getProductsData"])
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
