import React from 'react'
import { Motion, spring } from 'react-motion'

import Scrollable from './Scrollable'

export default class MotionScroll extends React.Component {
  state = { fire: 0, to: 0, scroll: 0 }

  fire = (to) => {
    if (this.state.scroll !== to) {
      this.set('to', null)(to)
      this.set('fire', null)(true)
    }
  }

  scrollTo = (to) => () => {
    if (this.state.scroll !== to) {
      if (typeof to === 'number') this.fire(to)
      if (typeof to === 'string') {
        this.fire(document.getElementById(to).offsetTop)
      }
    }
  }

  set = (prop, predictedValue) => value => {
    this.setState({ [prop]: predictedValue || value })
  }

  render() {
    const { scrollTo, props, state } = this
    const { children, height, className, onScroll, config } = props
    const { scroll, fire } = state
    return (
      <Motion
        style={{
          x: fire
            ? spring(this.state.to, config)
            : scroll
        }}
        onRest={this.set('fire', 0)}
      >
        {m => <Scrollable
          className={className}
          customOnScroll={onScroll}
          height={height}
          disable={this.state.fire}
          scrollTop={m.x}
          onScroll={this.set('scroll')}
          children={React.cloneElement(children, { scrollTo })}
        />}
      </Motion>
    )
  }
}

MotionScroll.defaultProps = {
  config: { stiffness: 230, damping: 25, precision: 10 },
}
