import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogs from './../components/Blogs'

import { Container, Row} from 'react-bootstrap'
import { BlogList } from './../../data'

class IndexPage extends Component{

  state = {
    blogs: []
  }

  componentDidMount(){
    this.getBlogs()
  }

  getBlogs = () => {
    let tempBlogs = []
    BlogList.forEach(item => {
      const singleitem = {...item}
      tempBlogs = [...tempBlogs, singleitem]
    })

    this.setState({
      blogs: tempBlogs
    })
  }

  render(){

    return (
      <Layout>
        <SEO title="Home" />

        <section className="pt-5 pb-5 blogSection">
          <Container>
              
            <Blogs blogs={this.state.blogs} />

          </Container>
        </section>
      </Layout>
    )

  }
}

export default IndexPage