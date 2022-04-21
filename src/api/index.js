const axios = require('axios')
export default {
  postBoard (name) {
    axios
      .post('http://localhost:5000/boards/create', {
        board:{
            name
        }
      })
      .then(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        }
      )
  },
  getListFromBoard (boardId) {},
  postList (board, name) {},
  getTaskFromList (listId) {},
  postTask (list, title) {},
  deleteTask (taskId) {},
  completedTask (taskId) {}
}
