import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
      background-color: lavenderblush;
      color: purple;
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
          color: purple;
        `}
      >
        grimoire
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
        color: purple;
        padding: ${rhythm(1.5)};
      `}
    >
      about
    </Link>
    <Link
        to={`/contact/`}
        css={css`
          float: right;
          color: purple;
        `}
      >
        contact
      </Link>
    {children}
  </div>
)
