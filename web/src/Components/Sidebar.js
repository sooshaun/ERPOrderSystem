import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class Sidebar extends Component {

  state = {
    collapsed: true,
  };

  // the turn the toggle back on just update to collapsed: !this.state.collapsed
  toggleCollapsed = () => {
    this.setState({
      collapsed: this.state.collapsed,
    });
  }

  render() {


    return (


      <Sider style={{ overflow: 'auto', position: 'sticky', left: 0 }}>

        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}

        <Menu
          theme="dark"
          // defaultSelectedKeys={['0']}
          // defaultOpenKeys={['sub1']}
          // style={{ height: '100%', borderRight: 0 }}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
        >


          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>Buy</span></span>}
          >
            <Menu.Item key="1"><Icon type="code-o" />New Order</Menu.Item>
            <Menu.Item key="2"><Icon type="book" />Order History</Menu.Item>
            <Menu.Item key="3"><Icon type="profile" />Update Company Profile</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Xiao Ping Guo</span></span>}
          >
            <Menu.Item key="4"> <Icon type="pie-chart" />DashBoard</Menu.Item>
            <Menu.Item key="5"><Icon type="play-circle-o" />Production</Menu.Item>
            <Menu.Item key="6"><Icon type="retweet" />Delivery</Menu.Item>
            <Menu.Item key="7"><Icon type="book" />Account</Menu.Item>
            <Menu.Item key="8"><Icon type="user" />Admin Set Up</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            title={<span><Icon type="info" /><span>Info</span></span>}
          >
            <Menu.Item key="9"><Icon type="book" />History</Menu.Item>
            <Menu.Item key="10"><Icon type="idcard" />Management</Menu.Item>
            <Menu.Item key="11"><Icon type="book" />Blog</Menu.Item>
          </SubMenu>
          <Menu.Item key="12"><Icon type="file" /><span>File</span></Menu.Item>
        </Menu>
      </Sider>

    )
  }
}

export default Sidebar