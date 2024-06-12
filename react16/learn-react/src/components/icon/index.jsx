import { Component } from 'react'
import './index.scss'
class LfIcon extends Component {
  render() {
    return (
      <>
        <i className={`lf-icon iconfont icon-${this.props.name}`} />
      </>
    )
  }
}

export default LfIcon
