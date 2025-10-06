<template>
  <div class="card">
    <img :src="imageUrl" alt="Person photo" class="card-image" />
    <div class="card-content">
      <h2 class="card-name">{{ person.firstname }} {{ person.lastname }}</h2>
      <p class="card-text">
        Text
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  person: {
    type: Object,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

.card {
  width: 250px;
  background-color: #f2f2f2;
  color: black;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-style: normal;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-name {
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 8px;
}

.card-text {
  font-size: 12px;
  line-height: 1.4;
  font-weight: 200;
}
</style>
