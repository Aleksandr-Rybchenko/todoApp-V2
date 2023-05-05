import Button from "../UI/Button"
import styles from "./TodosActions.modules.css"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
const TodosActions = ({
  resetTodos,
  deleteCompleteTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title='Оновити список задач' onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title='Очистити список виконаних задач'
        onClick={deleteCompleteTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
export default TodosActions
