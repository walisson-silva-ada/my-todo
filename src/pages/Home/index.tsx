import * as S from "./styles";
import { Summary } from "./Summary";
import { TodayTasksList } from "./TodayTasksList";

export function Home() {
  return (
    <S.Container>
      <Summary />

      <TodayTasksList />
    </S.Container>
  );
}
