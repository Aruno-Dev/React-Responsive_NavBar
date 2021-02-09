import React, { Component } from 'react'
import '../assets/style/css/AnimatedCard.css'
import sneaker from '../assets/images/sneaker.png'
export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // card: null,
      // container: null,
      // title: null,
      // sneaker: null,
      // circle: null,
      cardStyle: {},
      titleStyle: {},
      sneakerStyle: {},
      circleStyle: {},
      xAxis: 0,
      yAxis: 0,
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleResetPosition = this.handleResetPosition.bind(this)
    this.handleTitleEffectIn = this.handleTitleEffectIn.bind(this)
    this.handleTitleEffectOut = this.handleTitleEffectOut.bind(this)
    this.handleSneakerEffectIn = this.handleSneakerEffectIn.bind(this)
    this.handleSneakerEffectOut = this.handleSneakerEffectOut.bind(this)
  }

  componentDidMount() {
    this.setState({
      // container: React.createRef(),
      // card: React.createRef(),
      // title: React.createRef(),
      // sneaker: React.createRef(),
      // circle: React.createRef(),
    })
  }
  handleMouseMove(event) {
    this.setState({
      xAxis: (window.innerWidth / 2 - event.pageX) / 25,
      yAxis: (window.innerHeight / 2 - event.pageY) / 25,
      cardStyle: {
        transformStyle: 'preserve-3d',
        minHeight: '80vh',
        width: '35rem',
        borderRadius: '30px',
        padding: '0rem 5rem',
        boxShadow:
          '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)',
        transform: `rotateY(${this.state.xAxis}deg) rotateX(${this.state.yAxis}deg)`,
      },
    })
  }
  handleResetPosition() {
    this.setState({
      cardStyle: {
        transformStyle: 'preserve-3d',
        transition: 'all 1s ease-in-out',
        minHeight: '80vh',
        width: '35rem',
        borderRadius: '30px',
        padding: '0rem 5rem',
        boxShadow:
          '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)',
        transform: `rotateY(${0}deg) rotateX(${0}deg)`,
      },
    })
  }
  handleTitleEffectIn() {
    this.setState({
      titleStyle: {
        fontSize: '3.3rem',
        transform: 'translateZ(250px)',
        transition: 'all 0.5s ease-in-out',
        // textShadow:'10px 10px 10px black'
      },
    })
  }

  handleTitleEffectOut() {
    this.setState({
      titleStyle: {
        transform: 'translateZ(0px)',
        transition: 'all 0.5s ease-in-out',
      },
    })
  }
  handleSneakerEffectIn() {
    this.setState({
      sneakerStyle: {
        width: '24rem',
        transform: 'translateZ(150px) rotateZ(25deg)',
        transition: 'all 0.5s ease-in-out',
      },
      circleStyle: {
        width: '20rem',
        height: '20rem',
        transform: 'rotate(1.5turn)',
        transition: 'all 1s ease-in-out',
        // boxShadow:'-10px -10px 10px black'
      },
    })
  }

  handleSneakerEffectOut() {
    this.setState({
      sneakerStyle: {
        transform: 'translateZ(0px)',
        transition: 'all 0.5s ease-in-out',
      },
      circleStyle: {
        width: '15rem',
        height: '15rem',
        transform: 'rotate(0)',
        transition: 'all 0.5s ease-in-out',
      },
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className="container"
          // ref={this.state.container}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleResetPosition}
        >
          <div
            className="card"
            // ref={this.state.card}
            style={this.state.cardStyle}
          >
            <div className="sneaker">
              <div
                className="circle"
                // ref={this.state.circle}
                style={this.state.circleStyle}
              ></div>
              <img
                // ref={this.state.sneaker}
                src={sneaker}
                alt="sneaker not found"
                style={this.state.sneakerStyle}
                onMouseEnter={this.handleSneakerEffectIn}
                onMouseLeave={this.handleSneakerEffectOut}
              />
            </div>
            <div className="info">
              <h1
                className="title"
                // ref={this.state.title}
                style={this.state.titleStyle}
                onMouseEnter={this.handleTitleEffectIn}
                onMouseLeave={this.handleTitleEffectOut}
              >
                NIKE AIR MAX 3
              </h1>
              <h3>
                If you are a TRUE sneaker lover ! This incredible shoe is for
                you !
              </h3>
              <div className="sizes">
                <button>39</button>
                <button>40</button>
                <button className="active">42</button>
                <button>44</button>
              </div>
              <div className="purchase">
                <button>Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
