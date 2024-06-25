import React, { Component } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getMenu, routes } from '@/router/index'
// import {useLoaderData} from "react-router-dom"
// const {contacts} =  useLoaderData();
//把class类组件包装在一个函数组件上
const withNavigate = WrappedComponent => {
  return function WithNavigate(props) {
    const navigate = useNavigate()
    return <WrappedComponent {...props} navigate={navigate} />
  }
}
class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: getMenu(routes)
    }
    console.log(this.state.menuItems)
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
    let path = e.key
    path = path === '/home' ? '/' : path
    console.log(path, '=======路径')
    this.props.navigate(path)
  }
}

export default withNavigate(Sidebar)
