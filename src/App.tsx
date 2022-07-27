import "antd/dist/antd.min.css";

import { StyledThemeProvider } from "definitions/styled-components";
import { Provider } from "react-redux";
import store from "redux/store";

import Home from "pages";

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </StyledThemeProvider>
  );
}

export default App;
