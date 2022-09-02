import { useContext } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TodoListContext } from "../../../TodoListContext";

import * as S from "./styles";

export function TodayTasksList() {
  const { tasks, handleRemoveTask } = useContext(TodoListContext);

  function removeTask(idToRemove: number) {
    console.log("Remover tarefa:", idToRemove);
    const ok = confirm("Tem certeza que você deseja remover essa tarefa?");

    if (ok) {
      handleRemoveTask(idToRemove);
    }
  }

  return (
    <S.Container>
      <S.Title>Today's Tasks</S.Title>

      <S.TodoList>
        {tasks.map((task) => (
          <S.TodoItem key={task.id}>
            <S.TodoContent>
              <S.TodoCheck
                type="checkbox"
                checked={task.done}
                onChange={() => {}}
              />
              <S.TodoLabel isChecked={task.done}>{task.title}</S.TodoLabel>
            </S.TodoContent>

            <S.TodoItemControls>
              <S.TodoEdit>
                <FiEdit2 />
              </S.TodoEdit>

              <S.TodoDelete onClick={() => removeTask(task.id)}>
                <FiTrash2 />
              </S.TodoDelete>
            </S.TodoItemControls>
          </S.TodoItem>
        ))}
      </S.TodoList>
    </S.Container>
  );
}
