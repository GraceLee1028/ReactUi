import React from "react";
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            pwd:""
        }
    }
    render(){
        return <>
        <label >用户名：<input type="text" value={this.state.name}/></label>
        <label >密码：<input type="password" value={this.state.pwd} /></label>
        <button>登录</button>
        <p>当前登录信息为:{this.state.name} {this.state.pwd}</p>
        </>
    }
}
export default Login