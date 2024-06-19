import React, { Component } from 'react'
import { BookOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
// import {useLoaderData} from "react-router-dom"
// const {contacts} =  useLoaderData();
class Sidebar extends Component {
  state = {
    menuItems: [
      {
        key: '001',
        icon: <BookOutlined />,
        label: '首页'
      },
      {
        key: '002',
        icon: <BookOutlined />,
        label: '用户中心'
      },
      {
        key: '003',
        icon: <BookOutlined />,
        label: '图标'
      },
      {
        key: '004',
        icon: <BookOutlined />,
        label: '按钮'
      }
    ]
  }
  render() {
    return (
      <Menu
        onClick={this.onClick}
        style={{
          width: 200
        }}
        mode="inline"
        items={this.state.menuItems}
      />
    )
  }
  onClick = e => {
    console.log(e)

    return
  }
}

export default Sidebar
