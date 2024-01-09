import React from "react"
import {moodList} from "../../utils/common.data"
//类式组件
class Describer extends React.Component{
  constructor(props){
    super(props)
    this.state = {status:0,text:''}
    this.toggleTwo = this.toggle.bind(this)
    this.inputTwo = this.input.bind(this)
  }
  render(){
    return <>
      <p>今天的天气：<span className={this.state.status?'hot':'green'}>{this.state.status?'炎热':'凉爽'}</span></p>
      <button onClick={this.toggleTwo}>切换天气</button>
      <br/>
      <label>心情：<input value={this.state.text} onInput={this.inputTwo} name="feeling" type="text"/></label>
      <p>{this.state.text}</p>
      <ul>
        {
          moodList.map((item)=>{
            return <li key={item.value}>{item.label}</li>
          })
        }
      </ul>
    </>
  }
  toggle(){
    this.setState({status:this.state.status===0?1:0})
  }
  input(e){
    const text = e.target.value;
    this.setState({text:text})
  }
}
export default Describer