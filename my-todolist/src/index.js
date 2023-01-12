import React from "react";
import ReactDOM  from "react-dom";
class Todo extends React.Component{
  render(){
    return <li>hello,{this.props.text}</li>
  }
}
class App extends React.Component{
  render(){
    const list = ['打工','运动','阅读','旅行'];
    return <div>
      <Todo text={list[0]}></Todo>
      <Todo text={list[1]}></Todo>
      <Todo text={list[2]}></Todo>
      <Todo text={list[3]}></Todo>
    </div>
  }
}

ReactDOM.render(<App />,document.getElementById('root'))