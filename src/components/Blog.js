import React, { Component } from 'react';
import { Link } from 'gatsby'
import { Col } from 'react-bootstrap'

//Blog Image
import BlogImageOne from './../images/blog-1.jpg'

class SingleBlog extends Component {
    state = {  }
    render() { 
        return (
            <Col md={4}>
                <div className="blogWrapper mb-4">
                    <div className="blogWrapper__image">
                        <Link to="/details">
                            <img src={this.props.blog.img} alt="Blog Image" />
                        </Link>
                    </div>
                    <div className="blogWrapper__content">
                        <h2 className="blogWrapper__content--title">
                            <Link to="/details">
                                {this.props.blog.title}
                            </Link>
                        </h2>
                        <p className="blogWrapper__content--info">{this.props.blog.description}</p>
                    </div>
                </div>
            </Col>
        );
    }
}
 
export default SingleBlog;