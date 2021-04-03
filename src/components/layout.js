import React from "react"
import PropTypes from "prop-types"
import { Layout as AntLayout } from "antd"

import CustomHeader from "./header"
import Hero from "./Hero"
import "../css/layout.css"
const { Content, Footer } = AntLayout

const Layout = ({ children }) => {
  return (
    <Layout className="layout">
      <CustomHeader siteTitle="UM::Autonomy" />
      <Content style={{ padding: "0 50px" }}>
        <Hero />
        <div
          style={{
            margin: `20px auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
