<template>
  <h1 :style="{'color': color }">Contador: {{ withSign }}</h1>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['contador', 'color'],
    setup(props) {
        const withSign = computed( () => {
            return '$' + props.contador;
        });

        return { withSign }
    }
}
</script>