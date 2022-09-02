import { useContext } from "react";
import { SummaryCard } from "../../../components/SummaryCard";
import { TodoListContext } from "../../../TodoListContext";
import { ITask } from "../../../types/ITask";
import * as S from "./styles";

export function Summary() {
  const { tasks } = useContext(TodoListContext);

  const todayTasksTotal = tasks.length;
  const pendingTasksTotal = tasks.filter((task) => !task.done).length;
  const doneTasksTotal = tasks.filter((task) => task.done).length;

  return (
    <S.Container>
      <SummaryCard
        icon="📅"
        title="Tarefas para hoje"
        value={todayTasksTotal}
      />
      <SummaryCard
        icon="⏳"
        title="Tarefas pendentes"
        value={pendingTasksTotal}
      />
      <SummaryCard
        icon="✅"
        title="Tarefas concluídas"
        value={doneTasksTotal}
      />
    </S.Container>
  );
}
