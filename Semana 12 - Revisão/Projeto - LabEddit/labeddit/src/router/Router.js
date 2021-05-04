import { Route, Switch } from 'react-router-dom'
import FeedPage from '../pages/Feed/FeedPage'
import LoginPage from '../pages/Login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'
import DetailsPostPage from '../pages/DetailsPost/DetailsPostPage'
import ErrorPage from '../pages/Error/ErrorPage'

function Router() {
  return (
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
  )
}

export default Router