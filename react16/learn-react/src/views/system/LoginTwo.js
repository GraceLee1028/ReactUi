import React from "react";
class LoginTwo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            pwd:""
        }
    }
    render(){
        return <>
        <h2>登录 事件</h2>
        <label >用户名：<input  onBlur={this.nameBlur}  type="text" /></label>
        <label >密码：<input onBlur={this.pwdBlur} type="password" /></label>
        <button onClick={this.loginDeal}>登录</button>
        <p>当前登录信息为:<br/>用户名：{this.state.name} 密码：{this.state.pwd}</p>
        </>
    }
    pwdBlur=(event)=>{
        this.setState({
            pwd:event.target.value,
        })
    }
    nameBlur=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
}
export default LoginTwo