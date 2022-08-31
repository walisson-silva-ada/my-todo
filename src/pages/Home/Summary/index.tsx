import { SummaryCard } from "../../../components/SummaryCard";
import * as S from "./styles";

export function Summary() {
  return (
    <S.Container>
      <SummaryCard icon="📅" title="Tarefas para hoje" value={5} />
      <SummaryCard icon="⏳" title="Tarefas pendentes" value={4} />
      <SummaryCard icon="✅" title="Tarefas concluídas" value={1} />
    </S.Container>
  );
}
