import { Component } from 'react'
import './index.scss'
class User extends Component {
  state = {
    //declare variable
    isError: false,
    targetId: ''
  }
  render() {
    return (
      <main className="lf-container white">
        用户详情页面
        <form id="calorie-counter">
          <label htmlFor="budget">Budget</label>
          <input type="number" min="0" placeholder="Daily calorie budget" id="budget" required />
          <fieldset id="breakfast">
            <legend>Breakfast</legend>
            <div className="input-container">
              <input type="text" placeholder="Name" id="" />
            </div>
          </fieldset>
          <fieldset id="lunch">
            <legend>Lunch</legend>
            <div className="input-container"></div>
          </fieldset>
          <fieldset id="dinner">
            <legend>Dinner</legend>
            <div className="input-container"></div>
          </fieldset>
          <fieldset id="snacks">
            <legend>Snacks</legend>
            <div className="input-container"></div>
          </fieldset>
          <fieldset id="exercise">
            <legend>Exercise</legend>
            <div className="input-container"></div>
          </fieldset>
          <div className="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options" value={this.state.targetId}>
                <option value="breakfast" selected>
                  Breakfast
                </option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button id="add-entry" type="button" onClick={this.addEntry}>
                Add Entry
              </button>
            </span>
          </div>
          <div>
            <button type="submit">Calculate Remaining Calories</button>
            <button type="button" id="clear" onClick={this.cleanInputString}>
              Clear
            </button>
          </div>
        </form>
        <div className="output hide" id="output"></div>
      </main>
    )
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
  addEntry() {}
}
export default User
