import React from 'react'

const style = {
  bg: {
    background: 'linear-gradient(to bottom, #3494e6, #ec6ead)'
  },
  item: {
    width: 100,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    fontFamily: 'sans-serif',
    fontWeight: 100,
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, .8)',
  }
}

const mocks = () => {
  let a = []
  for (var i = 0; i < 100; i++) a.push(i + 1)
  return a
}

export const Children = ({ onClick }) => (
  <div style={style.bg}>
    {mocks().map(x =>
      <div
        style={style.item}
        key={x}
        onClick={onClick}
        x={x}
        id={`item-${x}`}
      >
        {x}
      </div>
    )}
  </div>
)
