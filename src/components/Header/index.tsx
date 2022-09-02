import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { TodoListContext } from "../../TodoListContext";
import * as S from "./styles";

export function Header() {
  const data = useContext(TodoListContext);
  console.log("Header:", data);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function addNewTask() {
    // adicionar a tarefa digitada dentro da lista de tarefas
    toggleModal();
  }

  return (
    <S.Container>
      <S.Navbar>
        <S.NavBrand href="/">MyTodo</S.NavBrand>

        <S.NavList>
          <S.NavItem>
            <S.NavLink href="/">Today</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink href="/upcoming">Upcoming</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Navbar>

      <S.WelcomeWrapper>
        <S.WelcomeMessage>Welcome to MyTodo! 😁</S.WelcomeMessage>

        <S.AddTaskButton onClick={toggleModal}>Add task</S.AddTaskButton>
      </S.WelcomeWrapper>

      <ReactModal
        style={{
          content: {
            background: "#2A2D34",
            borderRadius: 5,
            maxWidth: 700,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            border: "none",
            display: "flex",
            paddingBottom: "2rem",
            position: "relative",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(2px)",
          },
        }}
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
      >
        <S.ModalContainer>
          <S.ModalTitle>Add task</S.ModalTitle>

          <S.Input type="text" placeholder="Task title..." autoFocus />
          <S.Input type="text" placeholder="Task category..." />
          <S.Input type="date" />

          <S.AddTaskButton onClick={addNewTask}>Add</S.AddTaskButton>
        </S.ModalContainer>
      </ReactModal>
    </S.Container>
  );
}
