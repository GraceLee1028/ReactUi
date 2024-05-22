import { Component } from 'react'
import './index.scss'
import InputContainer from './inputContainer'
class User extends Component {
  state = {
    //declare variable
    isError: false,
    targetId: 'breakfast',
    CaloriesList: [
      { id: 'breakfast', label: 'Breakfast', number: 0 },
      { id: 'lunch', label: 'Lunch', number: 0 },
      { id: 'dinner', label: 'Dinner', number: 0 },
      { id: 'snacks', label: 'Snacks', number: 0 },
      { id: 'exercise', label: 'Exercise', number: 0 }
    ]
  }
  render() {
    return (
      <main className="lf-container white">
        用户详情页面
        <form id="calorie-counter">
          <label htmlFor="budget">Budget</label>
          <input type="number" min="0" placeholder="Daily calorie budget" id="budget" required />
          {this.state.CaloriesList.map(item => {
            return <InputContainer key={item.id} number={item.number} item={item} />
          })}
          <div className="controls">
            <span>
              <label htmlFor="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options" value={this.state.targetId} onChange={event => this.changeType(event)}>
                {this.state.CaloriesList.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  )
                })}
              </select>
              <button id="add-entry" type="button" onClick={this.addEntry}>
                Add Entry
              </button>
            </span>
          </div>
          <div>
            <button type="submit" onClick="calculateCalories">
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear" onClick={this.cleanInputString}>
              Clear
            </button>
          </div>
        </form>
        <div className="output hide" id="output"></div>
      </main>
    )
  }
  changeType = event => {
    const value = event.target.value
    console.log(this.state, value)
    this.setState({ targetId: value })
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
  getCaloriesFromInputs = list => {
    let calories = 0
    for (const item of list) {
      const currVal = this.cleanInputString(item.value)
      const invalidInputMatch = this.isInvalidInput(currVal)
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`)
        this.setState({ isError: true })
        return null
      }
      calories += Number(currVal)
    }
    return calories
  }
  //添加某项
  addEntry = () => {
    const index = this.state.CaloriesList.findIndex(item => item.id === this.state.targetId)
    this.setState(prevState => {
      const list = [...prevState.CaloriesList]
      const preItem = list[index]
      const newItem = {
        ...preItem,
        number: preItem.number + 1
      }
      list.splice(index, 1, newItem)
      console.log('newItem====', newItem, list)
      return { CaloriesList: list }
    })
  }
  //calc calories
  calculateCalories = e => {
    e.preventDefault()
  }
}
export default User
