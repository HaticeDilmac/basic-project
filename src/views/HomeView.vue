<template>
  <div class="home">
    <p>{{ name }}</p>
    <button @click="clicked" ref="info">Click</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: 'HomeView',
  setup() {
    let name = ref(localStorage.getItem('name') || "Deneme");

    // Sayfa yüklendiğinde localStorage'dan değeri al
    onMounted(() => {
      if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
      }
    });

    const clicked = () => {
      name.value = 'Deneme Click';
      console.log(name.value);

      // Değişiklik yapıldığında localStorage'a kaydet
      localStorage.setItem('name', name.value);
    };

    return { name, clicked };
  }
}
</script>
