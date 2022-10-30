import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const CancelBtn = ({bgColor, color, size, text, icon, borderRadius}) => {
  const { handleClose } = useStateContext();
  return (
    <button
      type='button'
      onClick={handleClose}
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

export default CancelBtn