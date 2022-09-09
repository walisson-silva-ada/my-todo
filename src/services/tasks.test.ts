import { toast } from "react-toastify";
import { test, expect, vi } from "vitest";
import { api } from "./api";
import { createTaskOnApi } from "./tasks";

vi.mock("react-toastify", () => {
  return {
    toast: { error: vi.fn() },
  };
});

test("if create task on api", async () => {
  const payload = {
    id: 123,
    title: "titlo",
    category: "categoria",
    date: new Date("2022-09-09"),
    done: false,
  };

  vi.spyOn(api, "post").mockResolvedValue({});

  await createTaskOnApi(payload);
  expect(api.post).toBeCalledWith("/tasks", payload);
});

test("if create task on api is NOT WORKING", async () => {
  const payload = {
    id: 123,
    title: "titlo",
    category: "categoria",
    date: new Date("2022-09-09"),
    done: false,
  };
  const networkError = new Error("Network issues");
  vi.spyOn(api, "post").mockRejectedValue(networkError);

  await createTaskOnApi(payload);
  expect(api.post).toBeCalledWith("/tasks", payload);
  expect(toast.error).toBeCalledWith("Erro ao salvar a tarefa na API.");
});
