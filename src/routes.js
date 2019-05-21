import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import StreamCreate from './pages/StreamCreate'
import StreamDelete from './pages/StreamDelete'
import StreamShow from './pages/StreamShow'
import StreamList from './pages/StreamList'
import StreamEdit from './pages/StreamEdit'
import Header from './components/Header'
import history from './history'

const Routes = () => {
  return (
    <Router history={history} >
      <Header />
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/:id" exact component={StreamShow} />
      </Switch>
    </Router>
  )
}

export default Routes;