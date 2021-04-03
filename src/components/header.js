import { Link } from "gatsby"
import CustomLink from "./Link"
import PropTypes from "prop-types"
import React from "react"
import { Layout, Menu } from "antd"
const { Header } = Layout

const CustomHeader = ({ siteTitle }) => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
  // <header
  //   style={{
  //     background: `white`,
  //     fontWeight: `600`,
  //     position: `sticky`,
  //     height: `80px`,
  //     top: `0`,
  //   }}
  // >
  //   <div
  //     style={{
  //       width: `100vw`,
  //       height: `100%`,
  //       borderBottom: `1px solid #000000`,
  //     }}
  //   >
  //     <div
  //       style={{
  //         margin: `0 auto`,
  //         width: `95%`,
  //         height: `100%`,
  //         padding: `1.45rem 1.1rem`,
  //         display: `flex`,
  //         flexDirection: `row`,
  //         alignItems: `center`,
  //       }}
  //     >
  //       <h1 style={{ margin: 0 }}>
  //         <Link
  //           to="/"
  //           style={{
  //             textDecoration: `none`,
  //             color: `black`,
  //           }}
  //         >
  //           {siteTitle}
  //         </Link>
  //       </h1>
  //       <div style={{ marginRight: "auto" }}>
  //         <h3 style={{ margin: 2 }}>
  //           <CustomLink page="Team" />
  //           <CustomLink page="History" />
  //           <CustomLink page="Sponsors" />
  //         </h3>
  //       </div>
  //       <div style={{ marginLeft: "auto" }}>
  //         <h3 style={{ margin: 0 }}>
  //           <CustomLink page="Contact Us" />
  //         </h3>
  //       </div>
  //     </div>
  //   </div>
  // </header>
)

CustomHeader.propTypes = {
  siteTitle: PropTypes.string,
}

CustomHeader.defaultProps = {
  siteTitle: ``,
}

export default CustomHeader
