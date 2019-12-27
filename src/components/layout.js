/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const PrivacyLink = styled(Link)`

`

const GitHubLink = styled.a`
  margin-left: 15px;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <PrivacyLink to="/privacy-policy">プライバシーポリシー</PrivacyLink>
            <GitHubLink href="https://github.com/YayoiNoya/figreed">GitHub</GitHubLink>
          </Footer>
          <Footer>
            &copy; {new Date().getFullYear()} Figreed. Built with
            {` `}
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
          </Footer>
        </Content>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
