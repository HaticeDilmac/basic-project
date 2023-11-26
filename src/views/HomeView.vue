<template>
  <div class="home">
    <p>{{ name }}</p>
    <button @click="clicked" ref="info">Click</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'HomeView',
  setup() {
    let name = ref("Deneme");

    const clicked = () => {
      name.value = 'Deneme Click';
      console.log(name.value);
    };

    return { name, clicked };
  }
}
</script>
