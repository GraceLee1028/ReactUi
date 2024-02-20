import React from "react";
import List from './list'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            pwd:""
        }
        console.log('constructor挂载前===========')
    }
    componentWillMount(){
        localStorage.setItem('test','1')
        console.log('将要挂载时调用=========componentWillMount')
    }
    componentDidMount(){
        console.log('挂载完后调用=========componentDidMount')
    }
    componentWillUnmount(){
        localStorage.setItem('test','2')
        console.log("卸载或销毁前调用=========componentWillUnmount")
    }
    nameRef=React.createRef()// createRef的用法【最推荐用法】
    pwdRef = null//ref的回调用法
    render(){
        console.log("render=========")
        return <>
        <List />
        <label >用户名：<input  ref={this.nameRef}  type="text" /></label>
        <label >密码：<input ref={(ref)=>{this.pwdRef=ref}} type="password" /></label>
        <button onClick={this.loginDeal}>登录</button>
        <p>当前登录信息为:<br/>用户名：{this.state.name} 密码：{this.state.pwd}</p>
        </>
    }
    loginDeal=()=>{
        console.log(this.nameRef)
        this.setState({
            pwd:this.pwdRef.value,
            name:this.nameRef.current.value
        })
    }
}
export default Login