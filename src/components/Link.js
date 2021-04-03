import { Link } from "gatsby"
import React from "react"

export default function CustomLink({ page }) {
  return (
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        margin: `0 8px`,
        color: `black`,
      }}
    >
      {page}
    </Link>
  )
}
