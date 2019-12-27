import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
	margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <h1>プライバシーポリシー</h1>
        <p>
          Figreed（以下、本サイト）における個人情報について、以下のように個人情報の保護に努め、
          推進しますことを、プライバシーポリシーとして定めます。
        </p>
        <h2>個人情報・プライバシー管理について</h2>
        <p>
          本サイトの個人情報・プライバシーとは、個人情報保護法における「個人情報」を指します。<br />
          生存する個人の情報を指し、氏名・生年月日・住所・各種連絡先・その他個人を認識できる情報が該当情報になります。
        </p>
        <p>
          本サイトでは、ユーザーの個人情報を適切に管理いたします。
        </p>
        <p>
          ユーザーからお預かりした個人情報は、
          本サイトおよび主催者からの連絡・告知にのみ使用することとし、
          その他の目的では使用いたしません。
        </p><br />
        <h2>第三者への提供について</h2>
        <p>
          本サイトでは、以下の場合を除いて、ユーザーの同意を得ることなく第三者へ個人情報を提供することはございません。
          <ul>
            <li>法令に基づく提供・開示が必要な場合</li>
            <li>本人の同意を得ることが困難な状況で、人命・財産の保護に個人情報が必要である場合</li>
          </ul>
        </p><br />
        <h2>お問い合わせについて</h2>
        <p>
          本ポリシーについてのお問い合わせは、
          Contactもしくは以下のTwitterリンクよりお願いいたします。<br /><br />
          Twitter：<a href="https://twitter.com/NagaYayoi">@NagaYayoi</a>
        </p><br />
        <p>制定日：2019年12月25日</p>
      </Content>
    </Layout>
  )
}

export default PrivacyPolicy