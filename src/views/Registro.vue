<template>
  <div id="Producto" class="container p-5">
    <h1>Agregar nuevo instrumento</h1>
    <hr />
    <label> Nombre </label>
    <input type="text" class="form-control" v-model="instrument.name" />

    <label> Color </label>
    <input type="text" class="form-control" v-model="instrument.color" />

    <label> Precio </label>
    <input type="text" class="form-control" v-model="instrument.price" />

    <label> Categoria </label>
    <input type="text" class="form-control" v-model="instrument.category" />

    <button class="btn btn-info mt-3" @click="addProductLocal()">
      Registrar
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      instrument: {
        name: "",
        color: "",
        price: "",
        category: "",
      },
    };
  },

  methods: {
    ...mapActions(["addProduct"]),
    async addProductLocal() {
      const instrument = this.instrument;
      try {
        await this.addProduct(instrument);
        this.$bvToast.toast(`Puede revisarlo en la vista de productos`, {
          title: "Producto Agregado con éxito",
          variant: "primary",
        });
      } catch (e) {
        console.log(e);
        alert("something wrong...");
      }
    },
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
