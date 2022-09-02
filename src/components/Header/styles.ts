import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors["primary-color"]};
  padding: 2rem;

  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
`;

export const NavBrand = styled.a`
  font-size: 1.9rem;
  font-weight: 800;
  color: white;

  &:hover {
    color: #ddd;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;

export const NavItem = styled.li`
  font-size: 1.1rem;

  & + li {
    margin-left: 2rem;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
    transition: color 0.3s;
  }
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 3rem auto;
`;

export const WelcomeMessage = styled.p`
  font-weight: 500;
  font-size: 2rem;
`;

export const AddTaskButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors["primary-color-lighten"]};
  color: white;
  padding: 0.4rem 1rem;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 1rem;
  height: 56px;
  padding: 0 1rem;
  outline: none;
  border-radius: 5px;
  font-size: 1.1rem;
  background-color: ${({ theme }) => theme.colors["shape"]};
  border: 2px solid transparent;

  transition: all 0.3s;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors["secondary-color"]};
    transition: all 0.3s;
  }

  &::placeholder {
    color: #777;
  }
`;
