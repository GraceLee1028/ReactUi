import LfButton from '@/components/button/index'
import { Component } from 'react'

class PageBtn extends Component {
  //组件挂载完成调用,只调用一次
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    console.log('组件挂载完成调用，只调用一次')
  }
  render() {
    return (
      <div className="lf-container white">
        <h3>基础用法</h3>
        <div className="flex">
          <LfButton>默认按钮</LfButton>
          <LfButton type="primary">主要按钮</LfButton>
          <LfButton type="success">成功按钮</LfButton>
          <LfButton type="warning">警告按钮</LfButton>
          <LfButton type="danger">危险按钮</LfButton>
          <LfButton type="info">信息按钮</LfButton>
        </div>
        <div className="flex">
          <LfButton plain>朴素按钮</LfButton>
          <LfButton plain type="primary">
            主要按钮
          </LfButton>
          <LfButton plain type="success">
            成功按钮
          </LfButton>
          <LfButton plain type="warning">
            警告按钮
          </LfButton>
          <LfButton plain type="danger">
            危险按钮
          </LfButton>
          <LfButton plain type="info">
            信息按钮
          </LfButton>
        </div>
        <div className="flex">
          <LfButton round>圆角按钮</LfButton>
          <LfButton round type="primary">
            主要按钮
          </LfButton>
          <LfButton round type="success">
            成功按钮
          </LfButton>
          <LfButton round type="warning">
            警告按钮
          </LfButton>
          <LfButton round type="danger">
            危险按钮
          </LfButton>
          <LfButton round type="info">
            信息按钮
          </LfButton>
        </div>
        <div className="flex">
          <LfButton circle icon="roundcheck"></LfButton>
          <LfButton icon="add" type="primary">
            主要按钮
          </LfButton>
          <LfButton icon="check" type="success">
            成功按钮
          </LfButton>
          <LfButton icon="details" type="warning">
            警告按钮
          </LfButton>
          <LfButton icon="query" type="danger">
            危险按钮
          </LfButton>
          <LfButton icon="details" type="info">
            信息按钮
          </LfButton>
        </div>
      </div>
    )
  }
}
export default PageBtn
