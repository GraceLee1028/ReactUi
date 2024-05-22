import React, { Component } from 'react'
import PropTypes from 'prop-types'
class InputContainer extends Component {
  static propTypes = {
    number: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      addList: [],
      entryDropdownValue: props.item.id,
      entryDropdownName: props.item.label
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.number, '======', prevProps.number)
    if (this.props.number !== prevProps.number) {
      this.addItem()
    }
  }
  render() {
    const inputItems = this.state.addList.map((item, index) => {
      return (
        <React.Fragment key={this.state.entryDropdownValue + item.number}>
          <label htmlFor={`${this.state.entryDropdownValue}-${item.number}-name`}>Entry {item.number} Name</label>
          <input
            value={item.name}
            onChange={event => this.changeItem(event.target.value, index, 'name')}
            type="text"
            id={`${this.state.entryDropdownValue}-${item.number}-name`}
            placeholder="Name"
          />
          <label htmlFor={`${this.state.entryDropdownValue}-${item.number}-calories`}>Entry {item.number} Calories</label>
          <input
            type="number"
            min="0"
            value={item.value}
            onChange={event => this.changeItem(event.target.value, index, 'value')}
            id={`${this.state.entryDropdownValue}-${item.number}-calories`}
            placeholder="Calories"
          />
        </React.Fragment>
      )
    })
    return (
      <fieldset id={this.state.entryDropdownValue}>
        <legend>{this.state.entryDropdownName}</legend>
        <div className="input-container">
          {inputItems}
          {/* {this.state.addList.map((item, index) => {
            return (
              <React.Fragment key={this.state.entryDropdownValue + item.number}>
                <label htmlFor={`${this.state.entryDropdownValue}-${item.number}-name`}>Entry {item.number} Name</label>
                <input
                  value={item.name}
                  onChange={event => this.changeItem(event.target.value, index, 'name')}
                  type="text"
                  id={`${this.state.entryDropdownValue}-${item.number}-name`}
                  placeholder="Name"
                />
                <label htmlFor={`${this.state.entryDropdownValue}-${item.number}-calories`}>Entry {item.number} Calories</label>
                <input
                  type="number"
                  min="0"
                  value={item.value}
                  onChange={event => this.changeItem(event.target.value, index, 'value')}
                  id={`${this.state.entryDropdownValue}-${item.number}-calories`}
                  placeholder="Calories"
                />
              </React.Fragment>
            )
          })} */}
        </div>
      </fieldset>
    )
  }
  //添加
  addItem = () => {
    console.log('新增')
    const length = this.state.addList.length
    this.setState(prevState => {
      console.log(prevState.addList, '========数据')
      return { addList: [...prevState.addList, { number: length + 1, value: '', name: '' }] }
    })
  }
  //更新
  changeItem = (value, index, key) => {
    this.setState(prevState => {
      const list = [...prevState.addList]
      list.splice(index, 1, { ...list[index], name: value })
      return { addList: list }
    })
  }
}
export default InputContainer
