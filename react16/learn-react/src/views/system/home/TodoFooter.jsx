import {Component} from 'react';
import PropTypes from "prop-types"
class TodoFooter extends Component {
    static propTypes = {
        onClearFinish: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        checkAll: PropTypes.func.isRequired
    }
    state = {
        finishCount: 0,
        allCount: 0
    }
    render() {
        const {todos = []} = this.props;
        const doneTodos = todos.filter(tItem => tItem.done);
        const finishCount = doneTodos.length
        const allCount = todos.length
        // console.log(doneTodos)
        // this.setState({
        //     finishCount: doneTodos.length,
        //     allCount: todos.length
        // })
        return <footer>
            <div><input type="checkbox" checked={finishCount === allCount} onChange={this.props.checkAll} />全选</div>
            <p>已完成{finishCount}/全部{allCount}</p>
            <button onClick={this.props.onClearFinish}>清除已完成的数据</button>
        </footer>
    }
}
export default TodoFooter