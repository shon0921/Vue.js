// src/composables/useCounter.js
import { ref } from 'vue';

export function useCounter() {
    const count = ref(0);
    const increment = () => {
        count.value++;
    };
    return { count, increment };
}
