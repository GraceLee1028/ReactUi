import React, {Component} from 'react';
import {BookOutlined} from "@ant-design/icons";
import {Menu} from 'antd';
// import {useLoaderData} from "react-router-dom"
// const {contacts} =  useLoaderData();

class Sidebar extends Component {
    state = {
        menuItems: [
            {
                key: "001",
                icon: <BookOutlined />,
                label: "首页"
            },
            {
                key: "002",
                icon: <BookOutlined />,
                label: "用户中心"
            }
        ]
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