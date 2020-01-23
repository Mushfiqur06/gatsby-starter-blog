import React, { Component } from 'react';
import { Row } from 'react-bootstrap'

import Blog from './Blog'

class Blogs extends Component {
    state = {  }
    render() { 
        return (
            <Row>
                {this.props.blogs.map(item => {
                    return <Blog key={item.id} blog={item} />
                })}
            </Row>
        );
    }
}
 
export default Blogs;