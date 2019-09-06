import 'date-fns';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import reducers from './store/reducers';

import './index.css';
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => (action) => {
  const result = next(action);
  console.log('[CURRENT ACTION]', action, '[CURRENT STATE]', store.getState());
  return result;
};

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      light: '#fff',
      main: 'rgba(48, 48, 48, .5)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: 'rgba(244,67,54,.9)',
    },
  },
  typography: {
    htmlFontWeight: '600',
  },
});

ReactDOM.render(
  <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)))}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
