import { toast } from "react-toastify";
import { ITask } from "../types/ITask";
import { api } from "./api";

export async function createTaskOnApi(task: ITask) {
  try {
    await api.post("/tasks", task);
  } catch (err) {
    console.log("Erro ao salvar a tarefa na API:", err);
    toast.error("Erro ao salvar a tarefa na API.");
  }
}

// Criar uma função parecida com a função acima, mas com um get para a rota /tasks
export async function getTasksOnApi() {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (err) {
    console.log("Erro ao salvar a tarefa na API:", err);
    toast.error("Erro ao salvar a tarefa na API.");
  }
}
