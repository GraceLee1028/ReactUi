import React from 'react'
import axios from 'axios'
import { UserOutlined, EyeInvisibleOutlined, KeyOutlined } from '@ant-design/icons'
import { Form, Input, Checkbox, Button } from 'antd'
import './index.scss'
import { Link } from 'react-router-dom'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      pwd: '',
      history: []
    }
    console.log('constructor挂载前===========')
  }
  // 用 render 方法之前调用
  //getDerivedStateFromProps 的存在只有一个目的：让组件在 props 变化时更新 state
  static getDerivedStateFromProps(props) {
    console.log('getDrivedStateFromProps============', props)
    return null
  }
  //在最近一次渲染输出之前调用
  getSnapshotBeforeUpdate(d) {
    console.log('getSnapshotBeforeUpdate=============更新之前获取snapshot')
    console.log(d)
    return null
  }
  componentDidUpdate() {
    console.log('componentDidUpdate=====完成更新')
  }
  // componentWillMount(){
  //     localStorage.setItem('test','1')
  //     console.log('将要挂载时调用=========componentWillMount')
  // }
  //常用于请求数据
  componentDidMount() {
    this.getUserInfo()
    console.log('挂载完后调用=========componentDidMount')
  }
  componentWillUnmount() {
    // localStorage.setItem('test','2')
    console.log('卸载或销毁前调用=========componentWillUnmount')
  }
  nameRef = React.createRef() // createRef的用法【最推荐用法】
  pwdRef = null //ref的回调用法
  render() {
    return (
      <>
        <Form className="login-container">
          <Form.Item>
            <Input prefix={<UserOutlined className="login-pre-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item>
            <Input.Password prefix={<KeyOutlined className="login-pre-icon" />} suffix={<EyeInvisibleOutlined />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Checkbox>自动登录</Checkbox>
          </Form.Item>
          <Button type="primary" block onClick={this.loginDeal}>
            <Link to={`/home`}>登录</Link>
          </Button>
          {/* <Form.Item name="username">
                <Input  prefix={UserOutlined} placeholder="用户名"/>
            </Form.Item>
            <Form.Item name="password">
                <Input.Password prefix={UserOutlined} suffix={EyeInvisibleOutlined}  placeholder="密码"/>
            </Form.Item>
            <Form.Item name="autologin">
                <Checkbox>自动登录</Checkbox>
            </Form.Item> */}
        </Form>
      </>
    )
  }
  getUserInfo() {
    axios.get('/json/user.json').then(res => {
      const d = res.data
      console.log('current userinfo', d)
      this.setState({
        name: d.name,
        pwd: d.pwd,
        history: [...this.state.history, { name: d.name, pwd: d.pwd }]
      })
    })
  }
  loginDeal = () => {
    // console.log(this.nameRef)
    // const o = { pwd: this.pwdRef.value, name: this.nameRef.current.value }
    // this.setState({
    //   pwd: o.pwd,
    //   name: o.name,
    //   history: [o, ...this.state.history]
    // })
  }
}
export default Login
