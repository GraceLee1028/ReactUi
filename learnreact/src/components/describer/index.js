import React from "react"

//类式组件
class Describer extends React.Component{
  constructor(props){
    super(props)
    this.state = {status:0}
    this.toggleTwo = this.toggle.bind(this)
  }
  render(){
    return <>
      <p>今天的天气：{this.state.status?'炎热':'凉爽'}</p>
      <button onClick={this.toggleTwo}>切换天气</button>
    </>
  }
  toggle(){
    console.log(this)
    // this.setState({status:this.state.status===0?1:0})
  }
}
export default Describer