import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.css';
import './assets/index.scss';
import {AppStoreProvider} from './store/';

ReactDOM.render(
  <AppStoreProvider>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </AppStoreProvider>,
  document.getElementById('root')
);
