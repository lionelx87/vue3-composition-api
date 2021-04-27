<template>
  <div class="home">
    <Title :contador="contador" :color="color" />
    <h1 :style="{ 'color': color }">Contador: {{ contador }}</h1>
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn textoBoton="Aumentar" @accion="aumentar" />
    <Btn textoBoton="Disminuir" @accion="disminuir" />
    <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
  </div>
</template>

<script>

import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import Title from '../components/Title'
import Btn from '../components/Btn'
import { useCounter } from '../hooks/useCounter'

export default {
  components: { Title, Btn },
  setup() {

    const { contador, aumentar, disminuir } = useCounter();
    
    const texto = ref('');    

    const color = computed( () => {
      return contador.value >= 0 ? 'blue' : 'red';
    });

    return { contador, aumentar, disminuir, texto, color }    
  }    
}
</script>
