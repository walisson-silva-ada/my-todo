import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createTaskOnApi } from "../services/tasks";
import { ITask } from "../types/ITask";

interface TodoListContextData {
  tasks: ITask[];
  handleRemoveTask: (idToRemove: number) => void;
  handleCreateNewTask: (
    title: string,
    category: string,
    date: Date
  ) => Promise<void>;
  handleUpdateTaskStatus: (taskIdToUpdate: number) => void;
}

export const TodoListContext = createContext({} as TodoListContextData);

interface TodoListProviderProps {
  children: ReactNode;
}

export function TodoListProvider({ children }: TodoListProviderProps) {
  const [tasks, setTasks] = useState([] as ITask[]);

  function handleRemoveTask(idToRemove: number) {
    const filteredTasks = tasks.filter((task) => task.id !== idToRemove);
    setTasks(filteredTasks);
  }

  function handleUpdateTaskStatus(taskIdToUpdate: number) {
    // Seguindo o princípio da imutabilidade
    const newTasks = tasks.map((task) => {
      if (task.id === taskIdToUpdate) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  async function handleCreateNewTask(
    title: string,
    category: string,
    date: Date
  ) {
    // Seguindo o princípio da imutabilidade
    const newTask: ITask = {
      id: new Date().getTime(),
      title: title,
      category: category,
      date: date,
      done: false,
    };

    const tasksUpdated = [...tasks, newTask];

    setTasks(tasksUpdated);
    await createTaskOnApi(newTask);
  }

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        handleRemoveTask,
        handleCreateNewTask,
        handleUpdateTaskStatus,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export function useTodoList() {
  const contexto = useContext(TodoListContext);
  return contexto;
}
