import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePeopleStore = defineStore('people', () => {
    const people = ref([
        {
            id: 0,
            name: '홍길동0',
            mobile: '01000000000'
        },
        {
            id: 1,
            name: '홍길동1',
            mobile: '01010001000'
        },
    ])

    const peopleCount = computed(() => people.value.length)

    const printPeopleCount = () => {
        alert(`peopleCount : ${ peopleCount.value }`)
    }

    return { people, peopleCount, printPeopleCount }
})