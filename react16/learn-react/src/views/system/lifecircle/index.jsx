import LfButton from '@/components/button/index'
import { Component } from 'react'
import ChildOld from './childOld'
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
        <ChildOld value={this.state.count} />
        <h3>旧生命周期</h3>
        <h4>初始化</h4>
        <ol>
          <li>constructor</li>
          <li>componentWillMount</li>
          <li>render</li>
          <li>componentDidMount</li>
        </ol>
        <hr />
        <h4>更新</h4>
        <p>{this.state.count}</p>
        <div className="flex">
          <LfButton onClick={this.updateCount}>加1</LfButton>
        </div>
        <ol>
          <li>shouldComponentUpdate</li>
          <li>componentWillUpdate</li>
          <li>render</li>
          <li>componentDidUpdate</li>
        </ol>
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
