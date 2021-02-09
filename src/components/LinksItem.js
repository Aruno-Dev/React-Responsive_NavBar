import React from 'react'

class LinksItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <li>
        <a href={this.props.item.href} style={this.props.style}>
          {this.props.item.text}
        </a>
      </li>
    )
  }
}
export default LinksItem
