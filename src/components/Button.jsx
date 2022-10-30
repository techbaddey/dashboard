import React from 'react'

const Button = ({bgColor, color, size, text, icon, borderRadius}) => {
  return (
    <button
      type='button'
      style={{
        color,
        backgroundColor: bgColor,
        borderRadius
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl outline-none z-50`}>
        {icon} {text}
    </button>
  )
}

export default Button