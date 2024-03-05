import React from "react";
import varStyles from '@/assets/scss/var.module.scss';
import Login from "./views/layout"
// 自定义主题
import {ConfigProvider} from "antd"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {name:"test"};
    console.log(varStyles,'varStyles========')
      console.log('app======constructor挂载前===========')
  }
  componentWillMount(){
    // localStorage.setItem('app','1')
      console.log('app将要挂载时调用=========componentWillMount')
  }
  componentDidMount(){
      console.log('app挂载完后调用=========componentDidMount')
  }
  componentWillUnmount(){
      // localStorage.setItem('app','2')
      console.log("app卸载或销毁前调用=========componentWillUnmount")
  }
  changeName=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  render(){
    console.log("render=========app");
    return <ConfigProvider theme={{token:{colorPrimary:'#2aa3ff'}}}>
        <Login className={varStyles.primary}></Login>
    </ConfigProvider>
  }
  
}

export default App;
