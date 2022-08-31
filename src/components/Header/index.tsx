import * as S from "./styles";

export function Header() {
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

        <S.AddTaskButton>Add task</S.AddTaskButton>
      </S.WelcomeWrapper>
    </S.Container>
  );
}
