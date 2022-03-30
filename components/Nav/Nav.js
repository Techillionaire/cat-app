import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand h1 mb-0" href="/" >
            Bootstrap
        </Link>
        </div>
    </nav>
  )
}

export default Nav