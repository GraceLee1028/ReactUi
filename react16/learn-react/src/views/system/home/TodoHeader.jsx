import {Component} from 'react';
class TodoHeader extends Component {
    state = {
        currentValue: ""
    }
    render() {
        return <header>
            <input type="text" onKeyUp={this.enter} placeholder='请输入您的目标' />
        </header>
    }
    enter = (e) => {
        const tr = e.target;
        const code = e.which || e.keyCode;
        if (code === 13) {//回车
            const value = tr.value;
            const {onAdd} = this.props;
            // console.log(value);
            onAdd(value);
            tr.value = ""
        }
    }
}
export default TodoHeader