import React, { Component } from 'react';
import './LeftSideNav.css';

class LeftSideNav extends Component {

    statusHide = (isShow) =>{
        this.props.getStatus(isShow)
    }

    render() {
        return (
            <div id="leftSiteNav" className={this.props.isShow === false ? "sidenav hide" : "sidenav"}>
                <div className="menuTitle">
                    <a href="0">Category </a><span className="closebtn" onClick={() => this.statusHide(!this.props.isShow)}><i className="fa fa-times"></i></span>
                </div>
                <hr />
                <div className="parentNav">
                    <a href="1">Nữ<div className="view-more" /></a>
                    <a href="2">Nam<div className="view-more" /></a>
                    <a href="3">Siêu Thị<div className="view-more" /></a>
                    <a href="4">Nhà Cửa - Gia Dụng<div className="view-more" /></a>
                    <a href="5">Điện Tử<div className="view-more" /></a>
                    <a href="6">Mẹ & Bé<div className="view-more" /></a>
                </div>
                <hr />
                <div className="childNav">
                    <a href="1"><img src="/images/no-image.png" alt="no name" /><span className="tag">#koreanstyle</span><div className="view-more" /></a>
                    <a href="1"><img src="/images/no-image.png" alt="no name" /><span className="tag">#koreanbeauty</span><div className="view-more" /></a>
                    <a href="1"><img src="/images/no-image.png" alt="no name" /><span className="tag">#stylefeed</span><div className="view-more" /></a>
                </div>
            </div>
        );
    }
}

export default LeftSideNav;