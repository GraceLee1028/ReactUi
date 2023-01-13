import React from "react";
import ReactDOM  from "react-dom";
class Todo extends React.Component{
  render(){
    return <li>hello,{this.props.text}</li>
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:['打工','运动','阅读','旅行']
    }
  }
  componentDidMount(){
    this.setState({
      list:[...this.state.list,'发呆']
    })
  }
  render(){
    return <div>
      <Todo text={this.state.list[0]}></Todo>
      <Todo text={this.state.list[1]}></Todo>
      <Todo text={this.state.list[2]}></Todo>
      <Todo text={this.state.list[3]}></Todo>
      <Todo text={this.state.list[4]}></Todo>
    </div>
  }
}
//17之前的api
ReactDOM.render(<App />,document.getElementById('root'))
//18之后新的api
// const rootEle = document.getElementById('root')
// const root = ReactDOM.createRoot(rootEle)
// root.render(<App cal)