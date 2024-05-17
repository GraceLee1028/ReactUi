import React, { Component } from 'react'
class InputContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entryNumber: props.number,
      entryDropdownValue: props.value
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.entryNumber !== this.props.entryNumber) {
      this.setState({ entryNumber: this.props.entryNumber })
    }
    if (prevProps.value !== this.props.value) {
      this.setState({ entryDropdownValue: this.props.value })
    }
  }
  render() {
    return (
      <React.Fragment>
        <label htmlFor={`${this.state.entryDropdownValue}-${this.state.entryNumber}-name`}>Entry {this.state.entryNumber} Name</label>
        <input type="text" id={`${this.state.entryDropdownValue}-${this.state.entryNumber}-name`} placeholder="Name" />
        <label htmlFor={`${this.state.entryDropdownValue}-${this.state.entryNumber}-calories`}>
          Entry {this.state.entryNumber} Calories
        </label>
        <input type="number" min="0" id={`${this.state.entryDropdownValue}-${this.state.entryNumber}-calories`} placeholder="Calories" />
      </React.Fragment>
    )
  }
}
export default InputContainer
