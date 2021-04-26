import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/public/HomePage'
import ListTripsPage from '../pages/public/ListTripsPage'
import ApplicationFormPage from '../pages/public/ApplicationFormPage'
import LoginPage from '../pages/public/LoginPage'
import AdminHomePage from '../pages/private/AdminHomePage'
import CreateTripPage from '../pages/private/CreateTripPage'
import TripDetailsPage from '../pages/private/TripDetailsPage'
import Error from '../pages/Error'

function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/trips/list'>
          <ListTripsPage />
        </Route>

        <Route exact path='/trips/application'>
          <ApplicationFormPage />
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path='/admin/trips/list'>
          <AdminHomePage />
        </Route>

        <Route exact path='/admin/trips/create'>
          <CreateTripPage />
        </Route>

        <Route exact path='/admin/trips/:id'>
          <TripDetailsPage />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RouterPage