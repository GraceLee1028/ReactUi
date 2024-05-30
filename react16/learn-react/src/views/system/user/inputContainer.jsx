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
      if (this.props.number === 0) {
        this.clearItem()
      } else {
        this.addItem()
      }
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
  //清空数据
  clearItem = () => {
    this.setState(prevState => {
      return { addList: [] }
    })
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
      list.splice(index, 1, { ...list[index], [key]: value })
      return { addList: list }
    })
  }
  cleanInputString = str => {
    const regex = /[+-\s]/g
    console.log('original string: ', str)
    return str.replace(regex, '')
  }
  isInvalidInput = str => {
    const regex = /\d+e\d+/i
    const result = str.match(regex)
    return result
  }
  //获取该类数据
  getData = () => {
    let calories = 0
    for (const item of this.state.addList) {
      const currVal = this.cleanInputString(item.value)
      const invalidInputMatch = this.isInvalidInput(currVal)
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`)
        this.props.onError(true)
        return null
      }
      calories += Number(currVal)
    }
    return calories
  }
}
export default InputContainer
