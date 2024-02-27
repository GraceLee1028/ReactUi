import React from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./views/system/login"
import LoginTwo from "./views/system/LoginTwo"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {name:"test"};
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
    console.log("render=========app")
    return <div className="App">
        <Login name={this.state.name} />
        <LoginTwo/>
        <input  onBlur={this.changeName} type="text" placeholder="你的姓名" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
  }
  
}

export default App;
