import React, { Component } from 'react'
import { Link } from 'gatsby'

class MainMenu extends Component {
  render() {
    return (
      <>
        <Link to="/" name="home" onClick={this.handleItemClick}>
          Home
        </Link>
        <Link to="/about" name="about" onClick={this.handleItemClick}>
          About
        </Link>
        <Link to="/projects" name="projects" onClick={this.handleItemClick}>
          Projects
        </Link>
        <Link to="/blog" name="blog" onClick={this.handleItemClick}>
          Blog
        </Link>
      </>
    )
  }
}

export default MainMenu
