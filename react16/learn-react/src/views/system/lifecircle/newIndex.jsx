import LfButton from '@/components/button/index'
import { Component } from 'react'
import Child from './child.jsx'
class PageBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  render() {
    return (
      <div className="lf-container white">
        <h3>3个钩子不建议使用</h3>
        <ol>
          <li>UNSAFE_componentWillMount</li>
          <li>UNSAFE_componentWillReceiveProps</li>
          <li>UNSAFE_componentWillUpdate</li>
        </ol>
        <Child value={this.state.count} />
        <h3>新生命周期</h3>
        <h4>初始化</h4>
        <ol>
          <li>constructor</li>
          <li>getDerivedStateFromProps(静态生命周期，static)</li>
          <li>render</li>
          <li>componentDidMount</li>
        </ol>
        <hr />
        <h4>更新</h4>
        <ol>
          <li>getDerivedStateFromProps(静态生命周期，static)</li>
          <li>shouldComponentUpdate</li>
          <li>render</li>
          <li>getSnapshotBeforeUpdate</li>
          <li>componentDidUpdate</li>
        </ol>
        <p>{this.state.count}</p>
        <div className="flex">
          <LfButton onClick={this.updateCount}>加1</LfButton>
        </div>
        <ol></ol>
        <h4>卸载</h4>
        <ol>
          <li>componentWillUnmount</li>
        </ol>
      </div>
    )
  }
  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}
export default PageBtn
