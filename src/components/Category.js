import React, { Component } from 'react';
import './Category.css';
import { HOST_URL } from './utils/API';

class Category extends Component {

    state = {
        categories: []
    };

    componentDidMount() {
        this.loadCategory();
    }

    loadCategory = () => {
        this.mounted = true;
        fetch(`${HOST_URL}/categories`)
            .then(res => res.json())
            .then(json => {
                if (this.mounted) {
                    this.setState({
                        categories: json,
                    })
                }
            });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        var { categories } = this.state;
        return (
            <div className="category">
                <div className="horizontal-scroll-wrapper">
                    <div></div>
                    {categories.map(category => (
                        <div key={category.id}><img src={category.image_url} alt="no name" /><p>{category.name}</p></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Category;