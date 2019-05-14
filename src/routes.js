import React from 'react';
import { Router, Route } from 'react-router-dom'

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
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:id" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" exact component={StreamShow} />
    </Router>
  )
}

export default Routes;