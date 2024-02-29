import React from "react";
import List from './list'
import axios from "axios"
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            pwd:"",
            history:[]
        }
        console.log('constructor挂载前===========')
    }
    // 用 render 方法之前调用
    //getDerivedStateFromProps 的存在只有一个目的：让组件在 props 变化时更新 state
    static getDerivedStateFromProps(props){
        console.log("getDrivedStateFromProps============",props);
        return null
    }
    //在最近一次渲染输出之前调用
    getSnapshotBeforeUpdate(d){
        console.log("getSnapshotBeforeUpdate=============更新之前获取snapshot");
        console.log(d)
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate=====完成更新")
    }
    // componentWillMount(){
    //     localStorage.setItem('test','1')
    //     console.log('将要挂载时调用=========componentWillMount')
    // }
    //常用于请求数据
    componentDidMount(){
        this.getUserInfo()
        console.log('挂载完后调用=========componentDidMount')
    }
    componentWillUnmount(){
        // localStorage.setItem('test','2')
        console.log("卸载或销毁前调用=========componentWillUnmount")
    }
    nameRef=React.createRef()// createRef的用法【最推荐用法】
    pwdRef = null//ref的回调用法
    render(){
        // console.log("render=========login")
        const userHistory = this.state.history.map(item=>{
            return <p key={item.name}>用户名：{item.name},密码：{item.pwd}</p>
        })
        return <>
        <h1>历史登录信息</h1>
        {userHistory}
        <List />
        <label >用户名：<input  ref={this.nameRef}  type="text" /></label>
        <label >密码：<input ref={(ref)=>{this.pwdRef=ref}} type="password" /></label>
        <button onClick={this.loginDeal}>登录</button>
        <p>当前登录信息为:<br/>用户名：{this.state.name} 密码：{this.state.pwd}</p>
        </>
    }
    getUserInfo(){
        axios.get("/json/user.json").then(res=>{
            const d =res.data;
            console.log('current userinfo',d)
            this.setState({
                name:d.name,
                pwd:d.pwd,
                history:[...this.state.history,
                    {name:d.name,
                    pwd:d.pwd}]
            })
        })
    }
    loginDeal=()=>{
        console.log(this.nameRef)
        const o = {pwd:this.pwdRef.value,
        name:this.nameRef.current.value}
        this.setState({
            pwd:o.pwd,
            name:o.name,
            history:[o,...this.state.history]
        })
    }
}
export default Login