import React, { Component } from 'react';
import './BottomMenu.css';

class BottomMenu extends Component {
    
    statusShow = (isShow) =>{
        this.props.getStatus(isShow)
    }

    render() {
        return (
            <div className="navbar">
                <div><img src="images/icons/Home.png" alt="home"/> Trang chủ</div>
                <div onClick={()=>this.statusShow(!this.props.status)}><img src="images/icons/multimedia-menu.png" alt="menu"/> Danh mục</div>
                <div><img src="images/icons/shopping-bag.png" alt="cart"/> Giỏ hàng</div>
                <div><img src="images/icons/Inbox.png" alt="inbox"/> Inbox</div>
                <div><img src="images/icons/account.png" alt="account"/> Tài khoản</div>
            </div>
        );
    }
}

export default BottomMenu;