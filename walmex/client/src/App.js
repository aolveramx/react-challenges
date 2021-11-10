import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from './components/layout/Header'
import Home from './components/Home'
import Users from './components/Users'

import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#336699',
    secondary: '#CC9900',
    light: '#ffffff',
    dark: '#333333',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Redirect to='/' />
            <Users />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
