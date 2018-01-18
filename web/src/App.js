import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './style/App.css';
import Landing from './Components/LandingPage'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Pager from './Components/Pager'
import SignInForm from './Components/SignInForm'
import SignUpForm from './Components/SignUpForm'
import Productlisting from './Components/Productlisting'
import Delivery from './Components/Delivery'
import PrimaryNav from './Components/PrimaryNav'
import PageNotFound from './Components/PageNotFound'
import { Layout } from 'antd';
const { Content } = Layout;



class App extends Component {

  state = {

  };


  render() {

    return (

      <Router>
        <div className="App">
          {/* <PrimaryNav />      */}
          {/* <= after you set up the Router/Switch/Route, you can start you go to any Component and having <Link='/url'></Link> */}
          <Switch>

            <Route path='/signin' exact render={() => (<Fragment>{
              <SignInForm />
            }</Fragment>)} />

            <Route path='/signup' exact render={() => (<Fragment>{
              <SignUpForm />
            }</Fragment>)} />

            <Route path='/delivery' exact render={() => (<Fragment>{
              <Delivery />
            }</Fragment>)} />


            <Route path='/' exact render={() => (<Fragment>{
              <Landing style={{ minHeight: '100vh' }} />
            }</Fragment>)} />

            <Route path='/products' exact render={() => (<Fragment>{
              <Layout>
                <Sidebar />
                <Layout style={{ marginLeft: 0 }}>
                  <Content style={{ margin: '0', overflow: 'initial' }}>
                    <div style={{ padding: 20, background: '#fff', textAlign: 'center' }}>
                      <Productlisting />
                      <Productlisting />
                      <Productlisting />
                      <Productlisting />
                      <Pager />
                    </div>
                  </Content>
                  <Footer />
                </Layout>
              </Layout>
            }</Fragment>)} />

            {/* Three way of rendering Error page  */}
            {/* <Route render={({ location }) => (<h2>Page not Found: {location.pathname} </h2>)} /> */}

            {/* Since we are passing location, then we need to state props.location.pathname in the PageNotFound Components */}
            {/* <Route render={({ location }) => (<Fragment>{
              < PageNotFound location={location} />
            }</Fragment>)} /> */}

            {/* However, for consistency purpose, we have the attribute of the object stated here */}
            <Route render={({ location }) => (<Fragment>{
              < PageNotFound location={location.pathname} />
            }</Fragment>)} />

          </Switch>
        </div >
      </Router >
    );
  }
}

export default App;
