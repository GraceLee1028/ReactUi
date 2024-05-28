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
    ],
    form: {
      budgetCalories: ''
    },
    result: {
      remainingCalories: '',
      budgetCalories: '',
      consumedCalories: '',
      exerciseCalories: ''
    },
    showResult: false
  }
  render() {
    return (
      <main className="lf-container white">
        用户详情页面
        <form id="calorie-counter">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            value={this.state.form.budgetCalories}
            onChange={event => this.changeForm(event, 'budgetCalories')}
            min="0"
            placeholder="Daily calorie budget"
            id="budget"
            required
          />
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
            <button type="submit" onClick={this.calculateCalories}>
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear" onClick={this.cleanInputString}>
              Clear
            </button>
          </div>
        </form>
        <div className={`output ${this.state.showResult ? '' : 'hide'}`} id="output">
          <span class="{this.state.form.surplusOrDeficit.toLowerCase()}">
            {Math.abs(this.state.result.remainingCalories)} Calorie {this.getSurplusOrDeficit()}
          </span>
          <hr />
          <p>{this.state.result.budgetCalories} Calories Budgeted</p>
          <p>{this.state.result.consumedCalories} Calories Consumed</p>
          <p>{this.state.result.exerciseCalories} Calories Burned</p>
        </div>
      </main>
    )
  }
  getSurplusOrDeficit() {
    return this.state.remainingCalories < 0 ? 'Surplus' : 'Deficit'
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
      // console.log('newItem====', newItem, list);
      return { CaloriesList: list }
    })
  }
  changeData(data) {
    for (let key of data) {
      // this.setState()
    }
  }
  //calc calories
  calculateCalories = e => {
    e.preventDefault()

    this.setState({
      showResult: true,
      result: {
        remainingCalories: '',
        budgetCalories: '',
        consumedCalories: '',
        exerciseCalories: ''
      }
    })
  }
  clearForm() {
    this.setState(prevState => {
      const newList = prevState.CaloriesList.map(cItem => {
        return { ...cItem, number: 0 }
      })
      return { CaloriesList: newList }
    })
    this.setState({
      showResult: false,
      form: { budgetCalories: '' },
      result: { remainingCalories: '', budgetCalories: '', consumedCalories: '', exerciseCalories: '' }
    })
  }
  changeForm(event, key) {
    const value = event.target.value
    this.setState(prevState => {
      const form = prevState.form
      return { form: { ...form, [key]: value } }
    })
  }
}
export default User
