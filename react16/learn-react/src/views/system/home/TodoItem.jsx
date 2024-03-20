import {Component} from 'react';
class TodoItem extends Component {
    render() {
        const {item} = this.props;
        return <li>
            <label><input type="checkbox" />{item.label}</label>
        </li>
    }
}
export default TodoItem