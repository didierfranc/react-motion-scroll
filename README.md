# react-motion-scroll 🍭

**react-motion-scroll** is a tiny plugin for **react-motion**. It provides a simple HOC to have smooth scrolling in seconds.

## How it works

Just put any component inside `<SmoothScroll />` and set an height, if you don't it will inherit the parent height.

**MotionScroll** makes accessible a new property called `scrollTo` to your `<Child />` you can pass it a number ***(scrollTop value)*** or a string ***(an element id)*** and enjoy smooth scrolling

```js
import React, { Component } from 'react'
import MotionScroll from 'react-motion-scroll'
import List from 'SomeList'

const Content = ({ scrollTo }) => {
  return (
    <List onClick={scrollTo('item-50')} />
  )
}

export default class App extends React.Component {
  render() {
    return (
      <MotionScroll height={500}>
        <Content />
      </MotionScroll>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('react'))



```

Nothing more, have fun !

## More

[react-motion](https://github.com/chenglou/react-motion)
