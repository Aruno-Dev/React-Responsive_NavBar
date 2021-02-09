import React, { Component } from 'react'
import '../../assets/style/css/NavBar.css'
import LinksData from '../data/LinksData'
// import LinksList from '../LinksList'

export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navClass: null,
      burgerClass: null,

      navLinksStyle: {},
    }
    this.handleNavSlide = this.handleNavSlide.bind(this)
  }

  componentDidMount() {
    this.setState({
      navClass: 'nav-links',
      burgerClass: 'burger',
    })
  }
  handleNavSlide() {
    if (this.state.navClass === 'nav-links') {
      this.setState({
        navClass: 'nav-links nav-active',
        burgerClass: 'burger toggle  ',

        navLinksStyle: {
          animation: `navLinkFade 2.5s ease`,
        },
      })
    } else {
      this.setState({
        navClass: 'nav-links',
        burgerClass: 'burger',

        navLinksStyle: {},
      })
    }
  }

  render() {
    const LinksItems = LinksData.map((item, i) => (
      <li key={item.id} style={this.state.navLinksStyle}>
        <a href={item.href}>{item.text}</a>
      </li>
    ))

    return (
      <div>
        <nav>
          <div className="logo">
            <h4>Curry_Column </h4>
          </div>
          <ul className={this.state.navClass}>{LinksItems}</ul>
          {/* <LinksList class={this.state.navClass} style={this.state.navLinksStyle}/> */}

          <div className={this.state.burgerClass} onClick={this.handleNavSlide}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    )
  }
}
