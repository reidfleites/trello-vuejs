<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list :listId="listId" :tasks="taskList"></task-list>
  </section>
</template>
<script>
import taskList from '@/components/TaskList'
export default {
  name: 'column',
  components: { taskList },
  props: {
    listId: String,
    name: String
  },
  data () {
    return {
      taskList: [
        { id: '1', title: 'vuejs lernen', completed: false },
        { id: '2', title: 'Vuex lernen', completed: false }
      ]
    }
  }
}
</script>
