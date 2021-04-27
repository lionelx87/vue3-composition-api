import { ref } from '@vue/reactivity';

export function useCounter() {

    const contador = ref(0);

    const aumentar = () => contador.value++;

    const disminuir = () => contador.value--;

    return { contador, aumentar, disminuir }
}