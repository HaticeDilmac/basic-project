<!-- src/App.vue -->

<template>
  <div id="app">
    <h1>{{ $store.state.name }}</h1>
    <input v-model="newName" placeholder="Yeni İsim">
    <button @click="updateName">İsmi Güncelle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
    };
  },
  methods: {
    updateName() {
      this.$store.dispatch('updateName', this.newName);
      this.newName = '';
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
