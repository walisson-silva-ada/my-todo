import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const TodoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 0.5rem;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TodoContent = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoCheck = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

interface TodoLabelProps {
  isChecked: boolean;
}
export const TodoLabel = styled.label<TodoLabelProps>`
  margin-left: 1rem;
  font-size: 1.25rem;

  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

export const TodoItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const TodoDelete = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    line-height: 1;
  }
`;

export const TodoEdit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors["primary-color"]};
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    line-height: 1;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
