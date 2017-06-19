import React from 'react'
import ReactDOM from 'react-dom'
import MotionScroll from '../lib'
import { Children } from './Dumb'

const Content = ({ scrollTo }) => {
  return (
    <Children onClick={scrollTo('item-50')} />
  )
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <a
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
          href="https://github.com/didierfranc/react-motion-scroll"
        >
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontWeight: 100,
              height: 40,
              margin: 20,
            }}
          >
            react-motion-scroll
          </h1>
        </a>
        <MotionScroll height="calc(100vh - 80px)">
          <Content />
        </MotionScroll>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('react'))
