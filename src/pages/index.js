import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Contentful Gatsby Blog
        </h1>
        <h4>{data.allContentfulBlog.totalCount} Posts</h4>
        {data.allContentfulBlog.edges.map(({ node, index }) => (
          <div key={index}>
              <Link
                to={node.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                  `
                }
              >
              <span css={css`
                  display: flex;
                  flex-direction: row;
                `
                }>
                <img src={node.image.fluid.src} css={css`
                  width: 13rem;
                  height: 10rem;
                  margin-top: 1.25rem;
                `
                } alt={node.slug}/>
                <span css={css`
                  display: flex;
                  flex-direction: column;
                  margin: 1rem;
                `
                }>
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    — {node.dateAdded}
                  </span>
                </h3>
                  <p>{node.author}</p>
                  <p css={css`
                      margin-bottom: ${rhythm(1 / 6)};
                    `}>{node.excerpt}</p>
                </span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
// eslint-disable-next-line
export const pageQuery = graphql`
  {
    allContentfulBlog {
      totalCount
      edges {
        node {
          title
          slug
          author
          image {
            fluid {
              src
            }
          }
          excerpt
          dateAdded
        }
      }
    }
  }
`
