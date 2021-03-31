import React from 'react'
import "../styles/Layout.css"

function Layout(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Layout
