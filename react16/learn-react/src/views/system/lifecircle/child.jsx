import { Component, createRef } from 'react'

class PageBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.value
    }
    this.elementRef = createRef()
    console.log('constructor=====child==初始化1')
  }
  //在组件接收到新的 props 时更新其内部的 state
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps==========初始化2')
    console.log('getDerivedStateFromProps=========更新1')
    console.log('无法访问this,使用频率不高')
    console.log('从 props 初始化 state')
    console.log('状态同步')
    console.log('性能优化')
    if (nextProps.value !== prevState.count) {
      return {
        count: nextProps.value
      }
    }
    return null
  }
  render() {
    console.log('render==child===初始化3')
    console.log('render==child=========更新3')
    return (
      <div className="lf-container white">
        子组件:{this.state.count}
        <div ref={this.elementRef} className="mini-scroll">
          {Array.from({ length: this.state.count }, (_, i) => {
            return <p key={i}>数据：{this.state.count - i}</p>
          })}
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount========child======初始化4')
  }
  //更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate========child=======更新2')
    return nextState.count !== this.state.count
  }
  //在组件更新前记录当前的状态信息
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate=====child=======更新4')
    console.log('访问更新前Dom状态的场景，如滚动位置')
    console.log('========保存滚动位置')
    console.log('========记录 DOM 状态')
    console.log('========同步动画')
    const chatContainer = this.elementRef.current
    // 保存更新前的滚动位置
    if (chatContainer) {
      console.log('=======scrollHeight:========', chatContainer.scrollHeight)
      console.log('=======scrollTop:========', chatContainer.scrollTop)

      return chatContainer.scrollHeight - chatContainer.scrollTop
    }
    return null
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const chatContainer = this.elementRef.current
    console.log('componentDidUpdate=====child=======更新5')
    console.log('snapshot=============', snapshot)
    if (snapshot && chatContainer) {
      // 保持滚动位置
      chatContainer.scrollTop = chatContainer.scrollHeight - snapshot
    }
  }
}
export default PageBtn
