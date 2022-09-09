import { useState } from "react";
import ReactModal from "react-modal";
import { toast } from "react-toastify";
import { useTodoList } from "../../hooks/TodoListContext";
import * as S from "./styles";

export function Header() {
  const { handleCreateNewTask } = useTodoList();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  async function addNewTask() {
    // adicionar a tarefa digitada dentro da lista de tarefas
    console.log(title, category, date);

    if (title && category && date) {
      await handleCreateNewTask(title, category, new Date(date));
      setTitle("");
      setCategory("");
      setDate("");

      toggleModal();
      toast.success("Tarefa adicionada com sucesso!");
    } else {
      alert("Você precisa preencher todos os campos.");
    }
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

          <S.Input
            type="text"
            placeholder="Task title..."
            autoFocus
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
          />
          <S.Input
            type="text"
            placeholder="Task category..."
            value={category}
            onChange={(event) => setCategory(event.currentTarget.value)}
          />
          <S.Input
            type="date"
            value={date}
            min="2022-09-05"
            onChange={(event) => setDate(event.currentTarget.value)}
          />

          <S.AddTaskButton onClick={addNewTask}>Add</S.AddTaskButton>
        </S.ModalContainer>
      </ReactModal>
    </S.Container>
  );
}
