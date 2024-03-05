import React, {Component} from 'react';
import "./layout.scss"
import Navbar from './navbar';
class Layout extends Component {
    render() {
        return (
            <main className="lf-layout-container">
                <Navbar />
            </main>
        );
    }
}
export default Layout;