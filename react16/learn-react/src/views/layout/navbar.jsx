import React, {Component} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {Dropdown, Avatar, Space} from 'antd';
class Navbar extends Component {
    state = {
        menuItems: [
            {label: "字体大小", key: 'exit'},
            {label: "退出", key: 'exit'}
        ]
    }
    render() {
        return (
            <header className="lf-navbar">
                <div className="lf-navbar__brand">
                    <MenuFoldOutlined />
                    <MenuUnfoldOutlined />
                </div>
                <div className="lf-navbar__todo">
                    <Dropdown
                        menu={this.state.menuItems}
                    >
                        <Space>
                            <Avatar icon={<UserOutlined />} />
                            {/* <DownOutlined /> */}
                        </Space>
                    </Dropdown>
                </div>
            </header>
        );
    }
}

export default Navbar;