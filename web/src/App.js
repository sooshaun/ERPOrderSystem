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
import { Layout } from 'antd';
const { Content } = Layout;



class App extends Component {

  state = {

  };


  render() {

    return (

      <Router>
        <div className="App">
          <PrimaryNav />
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

            <Route render={({ location }) => (<h2>Page not Found: {location.pathname} </h2>)} />

          </Switch>
        </div >
      </Router>
    );
  }
}

export default App;
