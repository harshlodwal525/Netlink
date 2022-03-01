import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'antd/dist/antd.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
// import Navbar from './Navbar';
import Detail from './Detail';

import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const App = () => {
    return (
        <>
           

            <Switch>
                <Layout className="layout">

                    <Header>
                        <div className="logo" />
                        <Menu theme="Light" mode="horizontal" defaultSelectedKeys={['1']}>

                            <Menu.Item className="Net" key="0">
                                <Link to="/" ><span>Netlink</span></Link>
                            </Menu.Item>

                            <Menu.Item key="1">
                                <Link to="/" /><span>Home</span>
                            </Menu.Item>

                            <Menu.Item key="2">
                                <Link to="/about" /><span>About</span>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <Link to="/service" /><span>Services</span>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <Link to="/contact" /><span>Contact</span>
                            </Menu.Item>
                        </Menu>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/service" component={Service} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/detail-:id" component={Detail} />
                        <Redirect to="/" />

                    </Header>

                </Layout>
            </Switch>


        </>
    )
}

export default App;