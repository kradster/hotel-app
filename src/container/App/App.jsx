import React, {useContext } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyleSheet } from '../../Theme/GlobalStyleSheet';
import { ThemeContext } from '../../Context/ThemeContext';
import Home from '../Home/Home';








function App() {
  const { CurrentTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={CurrentTheme} >
      <GlobalStyleSheet />
      <Router>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
      </Router>
    </ThemeProvider>
  );
}


export default App;


