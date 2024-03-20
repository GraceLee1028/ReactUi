import {Component} from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        const {list} = this.props;
        return <ul>
            {
                list.map((item) => {
                    return <TodoItem key={item.value} item={item} />
                })
            }
        </ul>
    }
}
export default TodoList