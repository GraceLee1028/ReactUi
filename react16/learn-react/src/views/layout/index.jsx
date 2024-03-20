import React, {Component} from 'react';
import {Outlet} from "react-router-dom";
import "./layout.scss"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {Layout} from 'antd';
const {Header, Sider, Content} = Layout;
class LayoutMain extends Component {
    render() {
        return (
            <Layout theme="light" className="lf-layout-container light">
                <Header><Navbar /></Header>
                <Layout>
                    <Sider><Sidebar></Sidebar></Sider>
                    <Content>
                        <div id="layoutContent">
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default LayoutMain;