import React from 'react'
import { showcase, button } from '../style/LandingPage.css'
import { Layout } from 'antd';
const { Content } = Layout;


const landingPage = () => {
  return (
    <Content>
      <div className="showcase">
        <h1>Welcome To Xiao Ping Gao</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
        <a href="#" className="button">SIGN IN</a>
      </div>
    </Content>

  )

}

export default landingPage

