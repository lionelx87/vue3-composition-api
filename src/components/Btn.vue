<template>
    <!-- with emit
    <button @click="$emit('accion')">{{ textoBoton }}</button> -->
    <button @click="accion">{{ textoBoton }}</button>
</template>

<script>
export default {
    props: ['textoBoton'],
    setup(props, context) {
        const accion = () => {
            context.emit('accion')
        };
        return { accion }
    }

}
</script>