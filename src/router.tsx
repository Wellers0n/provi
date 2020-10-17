import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { history } from './util'
// pages
import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'
import { withContext } from './context/withContext'

const router = () => {
    return (

        <BrowserRouter>
            <div>
                <Switch>
                    <Router history={history}>
                        <Route path="/" exact component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                        {/* <Route component={notFound} /> */}
                    </Router>
                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default withContext(router)