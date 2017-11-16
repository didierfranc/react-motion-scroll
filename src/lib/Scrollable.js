import React from 'react'
import { isEqual, debounce } from './helpers'

export default class Scrollable extends React.Component {
  componentWillReceiveProps = n => {

    if (n.scrollTop !== this.props.scrollTop) {
      if (this.props.horizontal) {
        this.e.scrollLeft = n.scrollTop
      } else {
        this.e.scrollTop = n.scrollTop
      }
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
    const { customOnScroll } = this.props
    if (customOnScroll) customOnScroll(e)
    this.propagateScroll(e)
  }
  propagateScroll = debounce(() => {

    if (this.props.horizontal) {
      this.props.onScroll(this.e.scrollLeft);
    } else {
      this.props.onScroll(this.e.scrollTop);
    }
  })
  render() {
    const { children, height, className, horizontal } = this.props
    return (
      <div
        style={{
          height: height || '100%',
          overflow: 'scroll',
          position: 'relative',
          WebkitOverflowScrolling: 'touch',
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
