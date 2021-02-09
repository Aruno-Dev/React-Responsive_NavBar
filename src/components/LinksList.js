import React from 'react'
import LinksData from './data/LinksData'
import LinksItem from './LinksItem'

class LinksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const LinksItems = LinksData.map((item, i) => (
      <LinksItem
        key={item.id}
        item={item}
        style={this.props.style}
        index={i}
      />
    ))
    return <ul className={this.props.class}>{LinksItems}</ul>
  }
}
export default LinksList
