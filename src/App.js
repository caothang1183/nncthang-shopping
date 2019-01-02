import React, { Component } from 'react';
import './App.css';
import LeftSideNav from './components/layouts/LeftSideNav';
import Banner from './components/layouts/Banner';
import BottomMenu from './components/layouts/BottomMenu';
import Category from './components/Category';
import Product from './components/Product';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    getStatus = (params) => {
        this.setState({
            isShow: params
        });
    }

    render() {
        var isShow = this.state.isShow;
        return (
            <div className="App">
                <div>
                    <LeftSideNav isShow={isShow} getStatus={this.getStatus}/>
                </div>
                <div className="header">
                    <Banner />
                </div>
                <div className="container">
                    <Category />
                    <Product />
                </div>
                <div className="footer">
                    <BottomMenu status={isShow} getStatus={this.getStatus}/>
                </div>
            </div>
        );
    }
}

export default App;
