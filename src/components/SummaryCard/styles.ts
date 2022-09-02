import styled, { css } from "styled-components";

interface ContainerProps {
  isDoneTasks: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex: 1;

  color: ${({ theme, isDoneTasks }) =>
    isDoneTasks ? theme.colors.white : theme.colors["black"]};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 5px;

  background-color: ${(props) =>
    props.isDoneTasks
      ? props.theme.colors["success"]
      : props.theme.colors["white"]};

  /* ${(props) =>
    props.isDoneTasks &&
    css`
      background-color: ${props.theme.colors.success};
    `} */
`;

export const Icon = styled.span`
  font-size: 3rem;
  padding: 1rem;
  line-height: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 0.3rem;
`;

export const Number = styled.span`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 600;
`;
