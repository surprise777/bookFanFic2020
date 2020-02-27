import React from "react";
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './muiTheme';

class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="app">
          <React.Fragment>
            <CssBaseline />
            <Routes />
          </React.Fragment>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
