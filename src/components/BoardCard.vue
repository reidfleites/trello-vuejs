<template>
  <router-link class="board-card" :to="{name: 'board', params: {id, name}}">
      <span>{{ name }}</span>
  </router-link>
</template>
<script>
export default {
  name: 'board-card',
  props: {
    id: String,
    name: String
  }
}
</script>
