import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Users from '../Users/Users'
import Courses from '../Courses/Courses'
import Course from '../Course/Course'

const home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path='/courses' component={Courses} />
        <Route path='/users' component={Users} />
        <Redirect from='/all-courses' to='/courses' />
        <Route render={() => <h1>404 page is yet to be found</h1>} />
      </Switch>
    </div>
  )
}

export default home
