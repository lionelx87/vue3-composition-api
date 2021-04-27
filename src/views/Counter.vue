<template>
  <h1>Contador: {{ contador }}</h1>
</template>

<script>

import { useCounter } from '../hooks/useCounter'

export default {
  setup() {
    return { ...useCounter() }
  }
}
</script>