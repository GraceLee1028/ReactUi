import React, {Component} from 'react';
import {BookOutlined} from "@ant-design/icons";
import {Menu} from 'antd';
class Sidebar extends Component {
    state = {
        menuItems: [
            {
                key: "001",
                icon: <BookOutlined />,
                label: "待办事项"
            },
            {
                type: 'divider',
            },
        ]
    }
    onClick = (e) => {
        console.log('click', e)
    }
    render() {
        return (
            <Menu
                onClick={this.onClick}
                style={{
                    width: 200,
                }}
                mode="inline"
                items={this.state.menuItems}
            />

        );
    }
}

export default Sidebar;