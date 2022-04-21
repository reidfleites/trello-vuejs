<template>
  <div>
    <h3>Boards</h3>
    <div class="board-collection">
      <input
        type="text"
        placeholder="Add a new Board"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      >
      </board-card>
    </div>
  </div>
</template>
<script>
import BoardCard from '../BoardCard'
export default {
  name: 'home-view',
  components: { BoardCard },
  data () {
    return {
      boardName: '',
      boards: [
        { id: '1', name: 'Tareas' },
        { id: '2', name: 'Lista de Compra' }
      ]
    }
  },
  methods: {
    add () {
      this.boards.push({ name: this.boardName })
    }
  }
}
</script>
