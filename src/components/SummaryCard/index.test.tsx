import { test, expect } from "vitest";
import { getByText, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/theme";
import { SummaryCard } from ".";

test("if render with data", () => {
  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <SummaryCard icon="😀" title="meu card" value={10} />
    </ThemeProvider>
  );

  expect(getByText("meu card")).toBeDefined();
  expect(getByText("😀")).toBeDefined();
  expect(getByText("10")).toBeDefined();
});

test("if render with isDoneTasks", () => {
  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <SummaryCard icon="😀" title="Tarefas concluídas" value={10} />
    </ThemeProvider>
  );

  expect(getByText("Tarefas concluídas")).toBeDefined();
  expect(getByText("😀")).toBeDefined();
  expect(getByText("10")).toBeDefined();
});
