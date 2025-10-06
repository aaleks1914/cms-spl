<template>
  <div class="app">
    <div class="wrapper">
      <h1 class="title">HTL Dornbirn 5bWI</h1>

      <div class="card-grid">
        <PersonCard
            v-for="(person, index) in people"
            :key="person.uuid"
            :person="person"
            :image-url="`https://picsum.photos/200/300?random=${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PersonCard from './components/PersonCard.vue'

const people = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://fakerapi.it/api/v2/persons?_quantity=10')
    const data = await res.json()
    people.value = data.data
  } catch (err) {
    console.error('Error fetching people:', err)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');

.app {
  background-color: #3b3a11;
  min-height: 100vh;
  padding: 60px;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
}

.title {
  font-size: 60px;
  font-weight: 900;
  text-align: right;
  width: 100%;
  font-family: "Jaro", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 100%;
}

@media (max-width: 768px) {
  .title {
    font-size: 36px;
    text-align: center;
    padding-right: 0;
  }

  .content-wrapper {
    align-items: center;
  }
}
</style>
