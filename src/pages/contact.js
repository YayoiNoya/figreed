import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
	margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <h1>Contact</h1>
        <p>
        お問い合わせ・ご連絡はTwitterにてお願いいたします。<br />
        <a href="https://twitter.com/NagaYayoi/" className="">Twitter（@NagaYayoi）</a>
        </p><br />
      </Content>
    </Layout>
  )
}

export default Contact