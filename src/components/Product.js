import React, { Component } from 'react';
import './Product.css';
import { HOST_URL } from './utils/API';
import Currency from 'react-currency-formatter';

class Product extends Component {

    state = {
        products: [],
        page: 1,
        totalPages: null,
        scrolling: false
    };

    componentDidMount() {
        this.loadProducts();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e);
        });
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state;
        if (scrolling) return
        if (totalPages <= page) return
        const lastProduct = document.querySelector('.product:last-child');
        const lastProductOffset = lastProduct.offsetTop + lastProduct.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20
        if (pageOffset > lastProductOffset - bottomOffset) this.loadMore();
    }

    loadProducts = () => {
        const { page, perPage, products } = this.state;
        this.mounted = true;
        const URL = `${HOST_URL}/products?page=${page}&perPage=${perPage}`;
        fetch(URL).then(res => res.json())
            .then(json => {
                if (this.mounted) {
                    this.setState({
                        products: [...products, ...json.docs],
                        scrolling: false,
                        totalPages: json.totalPages
                    })
                }
            });
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true,
        }), this.loadProducts);
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        var { products } = this.state;
        return (
            <div className="product-list">
                <p className="title-category">Sản phẩm <span><i className="fas fa-angle-double-right fa-xs"></i></span></p>
                <div className="products">
                    {products.map((product, index) => (
                        <div className="product" key={index}>
                            <div className="pd-image">
                                <img src={product.image} alt="Product" />
                                {product.new === true ? <span className="pd-new" /> : ""}
                                {product.isCopy === true ? <span className="pd-copyright" /> : ""}
                                <div className="pd-option"><i className="fa fa-heart"></i><i className="fa fa-gift"></i></div>
                            </div>
                            <div className="pd-details">
                                <p className="pd-brand">{product.brand.name}<span className="off">-{product.discount}%</span><span className="bank">Trả góp 0%</span></p>
                                <p className="pd-name">{product.name}</p>
                                <p className="price"><span>
                                    <Currency quantity={product.price} pattern="##,###đ" />
                                </span>
                                    <Currency quantity={(product.price * product.discount) / 100} pattern="##,###đ" />
                                </p>
                                <p className="online"><span></span> còn <Currency quantity={85000000} pattern="##,###đ" /></p>
                                <p className="place">{product.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Product;
