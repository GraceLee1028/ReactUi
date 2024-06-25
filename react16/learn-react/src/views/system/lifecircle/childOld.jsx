import { Component } from 'react'

class PageBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.value
    }
    console.log('constructor=====child==初始化1')
  }
  // 以下3个不建议使用
  componentWillMount() {
    console.log('componentWillMount=====child====初始化2')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps=====child=====新props出现')
  }
  render() {
    console.log('render==child===初始化3')
    console.log('render==child=========更新2')
    return <div className="lf-container white">子组件:{this.state.count}</div>
  }
  componentDidMount() {
    console.log('componentDidMount========child======初始化4')
  }
  //更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate========child=======更新1')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate=========child======更新2')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate=========child======更新4')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount========child=======卸载1')
  }
}
export default PageBtn
