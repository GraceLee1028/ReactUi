import { Component } from 'react'
import './index.scss'
import userImg from '@/assets/images/status/10008.jpg'
import InputContainer from './inputContainer'
class User extends Component {
  // cataItemRef = createRef()
  constructor(props) {
    super(props)
    this.childRefs = []
  }
  addRef = ref => {
    if (ref && !this.childRefs.includes(ref)) {
      this.childRefs.push(ref)
    }
  }
  state = {
    //declare variable
    isError: false,
    targetId: 'breakfast',
    CaloriesList: [
      { id: 'breakfast', label: 'Breakfast', number: 0, calories: 0 },
      { id: 'lunch', label: 'Lunch', number: 0, calories: 0 },
      { id: 'dinner', label: 'Dinner', number: 0, calories: 0 },
      { id: 'snacks', label: 'Snacks', number: 0, calories: 0 },
      { id: 'exercise', label: 'Exercise', number: 0, calories: 0 }
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
        <img className="user-clip one" src={userImg} alt="user" />
        <form id="calorie-counter">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            value={this.state.result.budgetCalories}
            onChange={event => this.changeResult(event, 'budgetCalories')}
            min="0"
            placeholder="Daily calorie budget"
            id="budget"
            required
          />
          {this.state.CaloriesList.map(item => {
            return <InputContainer ref={this.addRef} key={item.id} number={item.number} item={item} onError={this.changeErrorFlag} />
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
            <button type="button" id="clear" onClick={this.clearForm}>
              Clear
            </button>
          </div>
        </form>
        <div className={`output ${this.state.showResult ? '' : 'hide'}`} id="output">
          <span className="{this.state.form.surplusOrDeficit.toLowerCase()}">
            {Math.abs(this.state.result.remainingCalories)} Calorie {this.getSurplusOrDeficit()}
          </span>
          <hr />
          <p>{Math.abs(this.state.result.budgetCalories)} Calories Budgeted</p>
          <p>{Math.abs(this.state.result.consumedCalories)} Calories Consumed</p>
          <p>{Math.abs(this.state.result.exerciseCalories)} Calories Burned</p>
        </div>
      </main>
    )
  }
  getSurplusOrDeficit() {
    return this.state.result.remainingCalories > 0 ? 'Surplus' : 'Deficit'
  }
  changeType = event => {
    const value = event.target.value
    console.log(this.state, value)
    this.setState({ targetId: value })
  }
  //错误标识
  changeErrorFlag = (flag = false) => {
    this.setState({
      isError: flag
    })
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
      return { CaloriesList: list }
    })
  }
  //计算
  calculateCalories = e => {
    e.preventDefault()
    console.log(this.childRefs)
    let remainingCalories = 0,
      budgetCalories = this.state.result.budgetCalories,
      consumedCalories = 0,
      exerciseCalories = 0
    this.childRefs.map((ref, index) => {
      const calories = ref.getData()
      console.log(calories, '======')
      if (index === this.childRefs.length - 1) {
        exerciseCalories = calories
      } else {
        consumedCalories += calories
      }
    })
    if (this.state.isError) {
      return
    }
    remainingCalories = budgetCalories - consumedCalories + exerciseCalories
    console.log(remainingCalories)
    this.setState({
      showResult: true,
      result: {
        remainingCalories: remainingCalories,
        budgetCalories: budgetCalories,
        consumedCalories: consumedCalories,
        exerciseCalories: exerciseCalories
      }
    })
  }
  //清空
  clearForm = () => {
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
  //预算
  changeResult(event, key) {
    const value = event.target.value
    this.setState(prevState => {
      const result = prevState.result
      return { result: { ...result, [key]: value } }
    })
  }
}
export default User
