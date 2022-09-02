import { FiTrash2, FiEdit2 } from "react-icons/fi";

import * as S from "./styles";

export function TodayTasksList() {
  return (
    <S.Container>
      <S.Title>Today's Tasks</S.Title>

      <S.TodoList>
        <S.TodoItem>
          <S.TodoContent>
            <S.TodoCheck />
            <S.TodoLabel isChecked={false}>Tarefa 1</S.TodoLabel>
          </S.TodoContent>

          <S.TodoItemControls>
            <S.TodoEdit>
              <FiEdit2 />
            </S.TodoEdit>

            <S.TodoDelete>
              <FiTrash2 />
            </S.TodoDelete>
          </S.TodoItemControls>
        </S.TodoItem>
      </S.TodoList>
    </S.Container>
  );
}
