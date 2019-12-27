import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Container = styled.div`
  text-align: center;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  padding: 3.5rem;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
