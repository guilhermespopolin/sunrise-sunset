import React, { Fragment } from 'react'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'components/Routes'

import defaultTheme from 'themes/default'

const GlobalStyle = createGlobalStyle`
  /* Fonts */
  @import url('https://fonts.googleapis.com/css?family=Asap|Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Oswald');

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: Asap, sans-serif;
    color: ${({ theme }) => theme.colors.darkGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }

  /* React Date Picker custom styles */
  .react-datepicker-wrapper {
    .react-datepicker__input-container > input {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      padding: 0.7rem 2rem 0.7rem 0.7rem;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.darkGray};
      font-family: 'Asap', sans-serif;

      &:focus,
      &:active {
        border: 1px solid ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
`

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Fragment>
        <Router>
          <Routes />
        </Router>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
}

export default App
