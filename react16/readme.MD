# 不全局安装 create-react-app ,生成一个 react 项目

```
npx create-react-app learn-react
```

# react 的常用语法

> 减少 ref 的使用

## ref 字符串形式【不推荐使用,用法同 vue 一样】

```
<label >用户名：<input  ref="usernameRef"  type="text"/></label>
console.log(this.refs.usernameRef)

```

## ref 的回调用法【推荐】

```
<label >密码：<input ref={(ref)=>{this.pwdRef=ref}} type="password" /></label>
```

## createRef 的用法【最推荐】

```
import React from "react";
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            pwd:""
        }
    }
    nameRef=React.createRef()// createRef的用法【最推荐用法】
    pwdRef = null//ref的回调用法
    render(){
        return <>
        <List />
        <label >用户名：<input  ref={this.nameRef}  type="text"/></label>
        <label >密码：<input ref={(ref)=>{this.pwdRef=ref}} type="password" /></label>
        <button onClick={this.loginDeal}>登录</button>
        <p>当前登录信息为:用户名：{this.state.name} 密码：{this.state.pwd}</p>
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
```
