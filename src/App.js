import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// MUI stuff
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeObject from './util/theme';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Components
import Navbar from './components/layout/Navbar'
import Home from './components/Home'
import Details from './components/Details'

const theme = createMuiTheme(themeObject);

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details" component={Details} />
              </Switch>
            </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
