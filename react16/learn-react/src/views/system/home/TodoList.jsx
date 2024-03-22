import {Component} from 'react';
import PropTypes from "prop-types"
import TodoItem from './TodoItem';
class TodoList extends Component {
    //对props进行限制
    static propTypes = {
        onChangeTodo: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired,
        onDeleteTodo: PropTypes.func.isRequired,
    }
    render() {
        const {list} = this.props;
        return <ul>
            {
                list.map((item) => {
                    return <TodoItem key={item.value} item={item} onChangeTodo={this.props.onChangeTodo} onDeleteTodo={this.props.onDeleteTodo} />
                })
            }
        </ul>
    }
}
export default TodoList