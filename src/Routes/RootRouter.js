import React from "react";
import CustomLayout from "../Routes/CustomLayout";
import { useSelector } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import MainPage from "../Pages/MainPage/MainPage";
const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00716e",
      main: "#00716e",
      dark: "#00716e",
    },
    secondary: {
      light: "#00716e",
      main: "#00716e",
      dark: "#00716e",
    },
  },
});

const HomeRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <CustomLayout exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
function RootRouter() {
  const { token } = useSelector(({ reducer }) => reducer);
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <HomeRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default RootRouter;
