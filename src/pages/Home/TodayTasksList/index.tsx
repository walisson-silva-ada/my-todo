import * as S from "./styles";

export function TodayTasksList() {
  return (
    <S.Container>
      <S.TodoList>
        <S.TodoItem>
          <S.TodoContent>
            <S.TodoCheck />
            <S.TodoLabel isChecked={false}>Tarefa 1</S.TodoLabel>
          </S.TodoContent>

          <S.TodoItemControls>
            <S.TodoEdit>ícone de editar</S.TodoEdit>

            <S.TodoDelete>ícone de remover</S.TodoDelete>
          </S.TodoItemControls>
        </S.TodoItem>
      </S.TodoList>
    </S.Container>
  );
}
