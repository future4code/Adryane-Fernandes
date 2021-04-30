import { useHistory } from 'react-router-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import FeedPage from '../pages/Feed/FeedPage'
import LoginPage from '../pages/Login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'
import DetailsPostPage from '../pages/DetailsPost/DetailsPostPage'
import ErrorPage from '../pages/Error/ErrorPage'
import Header from '../components/Header/Header'

function Router() {
  const history = useHistory()
  return (
    <>
      <Header onClick={() => history.push('/')}/>
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