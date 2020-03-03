import React from "react";
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './muiTheme';

class App extends React.Component {
  constructor() {
    super()
    // The handler is passed down as a prop method for children to manipulate parent state. Here, the handler is bound to App.js context.
    this.handler = this.handler.bind(this)
    }
    state = {
      login_status: false,
      "header": {
        "input": ""
      }
    }
    
    // You pass the handler the full state to update each time. This means the child needs to call the current state as an object into a temporary variable, make changes, and then pass in the variable as the update here. See an example in pages/concerns.js:14 for what that looks like. For us, here. it just means we pass the state as a property down the component tree.
    handler(update) {
      this.setState(update)
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="app">
          <React.Fragment>
            <CssBaseline />
            <Routes state={this.state} handler={this.handler} />
          </React.Fragment>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
