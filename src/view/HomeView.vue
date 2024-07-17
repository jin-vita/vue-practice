<template>
  <div>
    <h1>홈화면</h1>
    <div>
      <p>이름 : {{ name }}</p>
      <v-text-field v-model="input1" />
      <v-btn @click="setName">이름 바꾸기</v-btn>
    </div>
    <v-divider />
    <div>
      <!--  연산 변수의 값을 화면에 표시  -->
      {{ output }}
    </div>
    <v-divider />
    <div>
      <v-btn @click="gotoAbout">goto about view</v-btn>
    </div>
    <v-divider />
    <div>
      <div>빌딩</div>
      <select v-model="selectedBuilding" @change="onBuildingChanged">
        <option v-for="(item, index) in buildingList" :key="index" :value="item.id">{{ item.name }}</option>
      </select>
      <v-divider />
      <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-title="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
      ></v-select>
      <div>
        Selected State Abbreviation: {{ select.abbr }}
      </div>
    </div>
    <v-divider />
    <div>
      <span>사람들</span>
      <ul>
        <li v-for="(item, index) in people" :key="index">{{ item.id }}, {{ item.name }}, {{ item.mobile }}</li>
      </ul>
    </div>
    <v-btn @click="addPerson">사람 추가</v-btn>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import router from "../router/index.js";
import { usePeopleStore } from "../store/people.js";
import { storeToRefs } from "pinia";


// 리액티브 변수
const name = ref('홍길동1')

// 입력상자와 연결할 리액티브 변수
const input1 = ref('')

const setName = () => {
  name.value = input1.value
  input1.value = ''
}

const output = computed(() => {
  return `결과 -> ${ name.value }`
})

// '정보 화면으로' 버튼 클릭 시
const gotoAbout = () => {
  router.replace({ path: '/about' })
}

const selectedBuilding = ref(0)
const onBuildingChanged = (e) => {
  alert(`onBulidingChanged 호출됨 : ${ selectedBuilding.value }`)
}
const buildingList = [
  {
    id: 0,
    name: '건물0'
  },
  {
    id: 1,
    name: '건물1'
  },
  {
    id: 2,
    name: '건물2'
  },
]
const select = ref({ state: 'Florida', abbr: 'FL' })
const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]

// 스토어 사용하기
const peopleStore = usePeopleStore()
const { people, peopleCount } = storeToRefs(peopleStore)

const addPerson = () => {
  people.value.push({
    id: peopleCount.value,
    name: `홍길동${ peopleCount.value }`,
    mobile: `010${ peopleCount.value }000${ peopleCount.value }000`
  })
  peopleStore.printPeopleCount()
}

</script>

<style scoped>
</style>