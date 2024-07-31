import React from 'react'

function Button({
    children,
    className='bg-black',
    ...props
}) {
  return (
    <div className={`${className} py-2.5 cursor-pointer`} {...props}>{children}</div>
  )
}

export default Button