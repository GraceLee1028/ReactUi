import {Component} from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
class Home extends Component {
    state = {
        listId: [],
        todoList: [
            {label: '背单词20', value: 0, done: false},
            {label: '阅读', value: 1, done: false},
        ],
        currentValue: ""
    }
    render() {
        return <main className="lf-container white">
            <TodoHeader onAdd={this.addTodoItem}></TodoHeader>
            <TodoList list={this.state.todoList} onChangeTodo={this.changeTodo} onDeleteTodo={this.deleteTodoItem}></TodoList>
            <TodoFooter todos={this.state.todoList} onClearFinish={this.onClearFinish} checkAll={this.checkAll}></TodoFooter>
        </main>
    }
    checkAll = (event) => {
        const checked = event.target.checked;
        const todoList = this.state.todoList.map(item => {
            item.done = checked
            return item;
        })
        console.log(checked, '======测试', todoList)
        this.setState({
            todoList
        })

    }
    deleteTodoItem = (item) => {
        const {todoList} = this.state;
        const index = todoList.findIndex(tItem => tItem.value === item.value);
        todoList.splice(index, 1)
        this.setState({
            todoList
        })
    }
    addTodoItem = (value) => {
        const item = {
            value: this.state.todoList.length,
            label: value,
            done: false
        }
        this.setState({
            todoList: [item].concat(this.state.todoList)
        })
    }
    onClearFinish = () => {
        const unFinshedTodos = this.state.todoList.filter(tItem => {
            return !tItem.done
        })
        this.setState({
            todoList: unFinshedTodos
        })
    }
    changeTodo = (value) => {
        this.setState({
            todoList: this.state.todoList.map(tItem => {
                if (tItem.value === value) {
                    return {...tItem, done: !tItem.done}
                }
                return tItem;
            })
        })
    }
}
export default Home