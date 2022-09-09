import { SummaryCard } from "../../../components/SummaryCard";
import { useTodoList } from "../../../hooks/TodoListContext";
import * as S from "./styles";

export function Summary() {
  const { tasks } = useTodoList();

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
