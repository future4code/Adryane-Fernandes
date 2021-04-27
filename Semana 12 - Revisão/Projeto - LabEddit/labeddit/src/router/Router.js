import { Route, BrowserRouter, Switch } from 'react-router-dom'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DetailsPostPage from '../pages/DetailsPostPage'
import ErrorPage from '../pages/ErrorPage'
import Header from '../components/Header'

function Router() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route exact path='/cadastro'>
            <RegisterPage />
          </Route>

          <Route exact path='/'>
            <FeedPage />
          </Route>

          <Route exact path='/post/:id'>
            <DetailsPostPage />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router