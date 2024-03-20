import {Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
class Home extends Component {
    state = {
        todoList: [
            {label: '背单词20', value: 0},
            {label: '阅读', value: 1},
        ],
        currentValue: ""
    }
    render() {
        return <main className="lf-container">
            <TodoHeader onAdd={this.addTodoItem}></TodoHeader>
            <TodoList list={this.state.todoList}></TodoList>
            <TodoFooter></TodoFooter>
        </main>
    }
    addTodoItem = (value) => {
        const item = {
            value: this.state.todoList.length,
            label: value
        }
        this.setState({
            todoList: [item].concat(this.state.todoList)
        })
    }
}
export default Home