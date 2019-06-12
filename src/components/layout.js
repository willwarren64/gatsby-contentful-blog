import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import MyComponent from "./toggle-theme"
export default ({ children }) => {
  const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
    return(
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div css={css`
      border: 3px solid;
      border-color: rgb(125,200,125);
      border-radius: 10px;
      padding-left: .5rem;
      padding-top: .5rem;
      text-align: center;
      `}>
        <Link to={`/`}>
          <h3
            css={css`
              backgroundColor: 'var(--bg)',
              color: 'var(--textNormal)',
              transition: 'color .4s ease-out, background 1s ease-out',
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
      </div>
      <span>
        <MyComponent />
      Night Theme
      </span>
      {children}
    </div>
  )
}