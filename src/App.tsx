import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";

import defaultTheme from "./styles/themes/theme";
import lightTheme from "./styles/themes/light";
import { useState } from "react";
import { Home } from "./pages/Home";

function App() {
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);

  return (
    <ThemeProvider theme={isDefaultTheme ? defaultTheme : lightTheme}>
      <Header />

      {/* <button onClick={() => setIsDefaultTheme(!isDefaultTheme)}>
        Change theme
      </button> */}

      <Home />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
