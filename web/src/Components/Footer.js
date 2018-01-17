import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;


const footer = () => {
  const inlineStyle = {
    display: 'inline-block',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#999'
  }
  return (

    <Footer style={inlineStyle}>
      <div>
        <p className="footer-links">
          <a href="https://github.com/sooshaun/ERPOrderSystem" target="blank">View Source on Github</a>
          <span>  /  </span>
          <a href="mailto:soo.shaun@gmail.com">Need any help?</a>
          <span>  /  </span>
          <a href="https://twitter.com/?lang=en" target="blank">Follow us on Twitter</a>
          <span>  /  </span>
          <a href="http://www.theage.com.au/" target="blank">Follow our story</a>
        </p>
        ©2018  Xia Ping Guo
      </div>
    </Footer >
  )
}

export default footer
