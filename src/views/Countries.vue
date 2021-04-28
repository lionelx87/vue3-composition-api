<template>
  <h1>Lista de Paises</h1>
  <p v-for="(countrie, index) in countries" :key="index">
    {{ countrie.name }}
  </p>
</template>

<script>

import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    const countries = ref([]);

    onMounted( async() => {
      try{
        const res = await fetch('rest.json');
        countries.value = await res.json();
      }catch(err) {
        console.log(err);
      }
    });

    return { countries }

  }

}
</script>