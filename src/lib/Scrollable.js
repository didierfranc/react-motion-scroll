import React from 'react'
import { isEqual } from './helpers'

export default class Scrollable extends React.Component {
  componentWillReceiveProps = n => {
    if (n.scrollTop !== this.props.scrollTop) {
      this.e.scrollTop = n.scrollTop
    }
    if (n.disable !== this.props.disable) {
      if (n.disable) this.e.style.pointerEvents = 'none'
      else this.e.style.pointerEvents = 'auto'
    }
  }

  shouldComponentUpdate = (next) => {
    return !isEqual(next.children.props, this.props.children.props)
  }

  handleScroll = e => {
    const { onScroll, customOnScroll } = this.props
    onScroll(this.e.scrollTop)
    if (customOnScroll) customOnScroll(e)
  }

  render() {
    const { children, height, className } = this.props
    return (
      <div
        style={{
          height: height || '100%',
          overflow: 'scroll',
          position: 'relative',
        }}
        ref={e => this.e = e}
        onScroll={this.handleScroll}
        className={className}
      >
        {children}
      </div>
    )
  }
}
