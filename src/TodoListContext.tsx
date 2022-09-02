import { createContext, ReactElement, ReactNode, useState } from "react";
import { ITask } from "./types/ITask";

interface TodoListContextData {
  tasks: ITask[];
  handleRemoveTask: (idToRemove: number) => void;
}

export const TodoListContext = createContext({} as TodoListContextData);

interface TodoListProviderProps {
  children: ReactNode;
}

export function TodoListProvider({ children }: TodoListProviderProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      category: "Estudos",
      date: new Date(),
      done: true,
    },
    {
      id: 2,
      title: "Tarefa 2",
      category: "Estudos",
      date: new Date(),
      done: true,
    },
    {
      id: 3,
      title: "Tarefa 3",
      category: "Estudos",
      date: new Date(),
      done: false,
    },
    {
      id: 4,
      title: "Tarefa 4",
      category: "Estudos",
      date: new Date(),
      done: false,
    },
    {
      id: 5,
      title: "Tarefa 5",
      category: "Estudos",
      date: new Date(),
      done: false,
    },
  ] as ITask[]);

  function handleRemoveTask(idToRemove: number) {
    const filteredTasks = tasks.filter((task) => task.id !== idToRemove);
    setTasks(filteredTasks);
  }

  // function handleCreateNewTask(title, category, date) {

  // }

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        handleRemoveTask,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
