import {Component} from 'react';
import PropTypes from "prop-types"
class TodoItem extends Component {
    static propTypes = {
        onChangeTodo: PropTypes.func.isRequired,
        onDeleteTodo: PropTypes.func.isRequired
    }
    render() {
        const {item} = this.props;
        return <li>
            <label><input type="checkbox" checked={item.done} onChange={this.handleCheck(item)} />{item.label}</label><button onClick={() => this.props.onDeleteTodo(item)}>删除</button>
        </li>
    }
    //勾选、取消勾选
    handleCheck(item) {
        return (event) => {
            const checked = event.target.checked;
            this.props.onChangeTodo(item.value)
        }
    }
}
export default TodoItem