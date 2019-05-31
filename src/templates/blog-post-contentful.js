import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlog
    const siteTitle = this.props.data.contentfulBlog.title
    const {previous, next} = this.props.pageContext
    return (
        <Layout location={this.props.location} title={siteTitle}>
          <ul style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title}
                </Link>
              )}
            </li>
          </ul>
            <div>
                <h1>{post.title}</h1>
                <h2>{post.author}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
            </div>
        </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
 query ContentfulBlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  contentfulBlog( slug: { eq: $slug }) {
    title
    author
    content {
      childContentfulRichText {
        html
      }
    }
    slug
  }
}
`