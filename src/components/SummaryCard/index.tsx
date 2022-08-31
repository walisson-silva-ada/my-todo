import * as S from "./styles";

interface SummaryCardProps {
  icon: string;
  title: string;
  value: number;
}

export function SummaryCard({ icon, title, value }: SummaryCardProps) {
  return (
    <S.Container isDoneTasks={title === "Tarefas concluídas"}>
      <S.Icon>{icon}</S.Icon>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Number>{value}</S.Number>
      </S.Content>
    </S.Container>
  );
}
