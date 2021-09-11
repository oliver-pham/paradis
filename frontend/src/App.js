import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Home';
import Explore from './Explore';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MenuAppBar from './MenuAppBar';
import NotFound from './NotFound';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
      contrastText: "#000000",
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <header className='App-header'>
          <MenuAppBar />
        </header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/explore'>
            <Explore />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
