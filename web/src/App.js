import React, { Component } from 'react';
import './style/App.css';
import Landing from './Components/LandingPage'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Pager from './Components/Pager'
import SignInForm from './Components/SignInForm'
import SignUpForm from './Components/SignUpForm'
import Productlisting from './Components/Productlisting'
import Delivery from './Components/Delivery'
import { Layout } from 'antd';
const { Content } = Layout;



class App extends Component {

  state = {

  };


  render() {

    return (
      <div className="App">


        <SignInForm />
        <SignUpForm />



        <Delivery />


        <Landing style={{ minHeight: '100vh' }} />




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




      </div >
    );
  }
}

export default App;
